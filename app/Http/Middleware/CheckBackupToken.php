<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class CheckBackupToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // Check if the token exists and matches the expected token
        $expectedToken = config('app.BACKUP_TOKEN'); // Store your expected token in .env
        $providedToken = $request->header('X-Backup-Token'); // Custom header

        if ($providedToken !== $expectedToken) {
            // Token mismatch or not provided, return unauthorized response
            return Response::json(['message' => 'Unauthorized'], 401);
        }

        return $next($request); // Proceed to the next middleware/controller
    }
}
