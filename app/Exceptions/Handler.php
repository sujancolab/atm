<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Support\Facades\Log;
use App\Models\ErrorLog;
use Throwable;


class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            $this->logToDatabase($e);
        });
    }

    /**
     * Log the exception to the database.
     *
     * @param  \Throwable  $exception
     * @return void
     */
    protected function logToDatabase(Throwable $exception)
    {
        try {
            ErrorLog::create([
                'message' => $exception->getMessage(),
                'exception' => (string) $exception,
            ]);
        } catch (Throwable $e) {
            // Log the error that occurred while trying to log the original exception
            Log::error('Failed to log exception to database: ' . $e->getMessage(), [
                'original_exception' => $exception,
                'logging_exception' => $e,
            ]);
        }
    }

    public function report(Throwable $exception)
    {
        // Log the exception to the default log file
        Log::error($exception->getMessage(), [
            'exception' => $exception
        ]);

        parent::report($exception);
    }

    public function render($request, Throwable $exception)
    {
        return parent::render($request, $exception);
    }
}
