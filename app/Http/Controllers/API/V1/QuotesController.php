<?php

namespace App\Http\Controllers\API\V1;

use App\Models\Tag;
use App\Models\User;
use App\Models\Quotes;
use Illuminate\Http\Request;
use App\Models\QuoteProducts;
use App\Models\QuotesRevisions;
use App\Notifications\QuotesApproval;
use App\Http\Requests\Quotes\QuotesRequest;
use App\Http\Requests\Products\ProductRequest;

class QuotesController extends BaseController
{

    protected $quotes = '';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(Quotes $quotes)
    {
        $this->middleware('auth:api');
        $this->quotes = $quotes;
        $this->users = auth('api')->user();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $yard_location = $request->get('yard_location');
        $status = $request->get('status');
        $name = $request->get('name');
        $date = db_date_format($request->get('date')) ?? '';
        $ppp = $request->get('ppp') ?? 25;
        start_query_log();
        $qry = $this->quotes->orderBy('created_at', 'desc');
        $qry->join('users as c1', 'c1.id', '=', 'quotes.created_by');
        $qry->join('users as c2', 'c2.id', '=', 'quotes.submitted_to');
        $qry->select('c2.name as pending_with', 'quotes.*', 'c1.yard_location');

        if ($yard_location != "") {
            $qry->where('C1.yard_location', $yard_location);
        }
        if ($status) {
            $qry->where('quotes.status', $status);
        }
        if ($name) {
            $qry->where('quotes.organization', 'LIKE', '%' . $name . '%');
            // $qry->where('quotes.name', 'LIKE', '%' . $name . '%');
        }
        if ($date) {
            $qry->whereDate('quotes.created_at', $date);
        }
        // $qry->where('quotes.created_by', $this->users->id)->get();

        if ($this->users->type != "Admin") {
            $users = $qry->where('quotes.created_by', $this->users->id)->with(['quote_products.products'])->paginate($ppp);
        } else {
            $users = $qry->with(['quote_products.products'])->paginate($ppp);
        }
        //last_query();
        return $this->sendResponse($users, 'Quotes list');
        // $this->users->id
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\Products\QuotesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(QuotesRequest $request)
    {
        $quotes = Quotes::create([
            'name' => $request['name'],
            'organization'  => $request['organization'],
            'email' => $request['email'],
            'phone' => $request['phone'],
            'address' => $request['address_1'],
            'city' => $request['city'],
            'state' => $request['state'],
            'zip' => $request['zip_code'],
            'pickup_address_1' => $request['pickup_address_1'],
            'pickup_address_2' => $request['pickup_address_2'],
            'pickup_city' => $request['pickup_city'],
            'pickup_state' => $request['pickup_state'],
            'pickup_zip' => $request['pickup_zip_code'],
            'additional_information' => $request['additional_information'],
            'material_image' => '',
            'status' => 'Submitted',
            // 'created_by' => $request['created_by'],
            'created_by' => $this->users->id,
            'submitted_to' => 3,
        ]);

        $material = $request['material'];
        $quotes->quote_products()->delete();
        $quotes->quote_products()->createMany($material);
        // $quotes->notify(new QuotesApproval());
        return $this->sendResponse($quotes, 'Quote Created Successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $allAdminUsers = User::select("id", "name")->where('organization', "United Scrap Metal")->get();
        $quotes = $this->quotes->with(['quote_products', 'quote_products.products', 'quote_revisions.user'])->findOrFail($id);
        // return $this->sendResponse($quotes, 'Quotes Details');
        $quotesData = ["quotes" => $quotes, "allAdmins" => $allAdminUsers, "isAdmin" => $this->users->organization == "United Scrap Metal" ? true : false];
        return $this->sendResponse($quotesData, 'Quotes Details');
    }

    public function forward_quotes(Request $request)
    {
        $qts = Quotes::find($request->id);
        $qts->submitted_to = $request->forward_id;
        $qts->save();

        $data = $request->forward_id;
        return $this->sendResponse($data, 'Quote Forward Successfully');
    }
    public function revised_quotes(Request $request)
    {
        $revised_quote = QuotesRevisions::create([
            'quote_id' => $request->quote_id,
            'version_no' => $request->version,
            'title' => $request->title,
            'description' => $request->description,
            'created_by' => $this->users->id,
        ]);

        return $this->sendResponse($revised_quote, 'Quote Revised Successfully');
    }

    public function revised_version(Request $request)
    {
        $QuotesRevisions = QuotesRevisions::select("version_no")->where('quote_id', $request->get('quote_id'))->orderBy("id", "desc")->first();
        return $this->sendResponse($QuotesRevisions, 'Quotes revision');
    }

    // /**
    //  * Update the specified resource in storage.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @param  \App\Product  $product
    //  * @return \Illuminate\Http\Response
    //  */
    public function update(Request $request, $id)
    {
        $quotes = $this->quotes->findOrFail($id);

        $path = "";
        if ($request->hasFile('scrap_material_picture')) {
            $productImg = $request->file('scrap_material_picture');
            $folder = "quotes/" . $id;
            $filename = uniqid(rand(), true) . '.' . $productImg->getClientOriginalExtension();
            $path = $productImg->storeAs($folder, $filename, 'public');
            $path =  '/storage/' . $path;
            $quotes->update(array('material_image' => $path));
        }



        // $product = $this->product->findOrFail($id);

        // $product->update($request->all());

        // // update pivot table
        // $tag_ids = [];
        // foreach ($request->get('tags') as $tag) {
        //     $existingtag = Tag::whereName($tag['text'])->first();
        //     if ($existingtag) {
        //         $tag_ids[] = $existingtag->id;
        //     } else {
        //         $newtag = Tag::create([
        //             'name' => $tag['text']
        //         ]);
        //         $tag_ids[] = $newtag->id;
        //     }
        // }
        // $product->tags()->sync($tag_ids);

        return $this->sendResponse($quotes, 'Quotes updated');
    }

    // /**
    //  * Remove the specified resource from storage.
    //  *
    //  * @return \Illuminate\Http\Response
    //  */
    // public function destroy($id)
    // {

    //     $this->authorize('isAdmin');

    //     $product = $this->product->findOrFail($id);

    //     $product->delete();

    //     return $this->sendResponse($product, 'Product has been Deleted');
    // }

    // public function upload(Request $request)
    // {
    //     $fileName = time() . '.' . $request->file->getClientOriginalExtension();
    //     $request->file->move(public_path('upload'), $fileName);

    //     return response()->json(['success' => true]);
    // }

    // public function getProducts()
    // {
    //     $products = Quotes::select('*')->get();
    //     return $this->sendResponse($products, '');
    // }

    public function yard_locations()
    {
        if ($this->users->type == "Admin") {
            $user = User::Select('id', 'yard_location', 'type')->get();
            $count = $user->count();
        } else {
            $user = User::Select('id', 'yard_location', 'type')->where('id', $this->users->id)->get();
            $count = $user->count();
        }
        return $this->sendResponse($user, 'User has been Deleted');
    }
}
