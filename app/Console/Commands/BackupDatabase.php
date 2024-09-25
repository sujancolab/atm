<?php

namespace App\Console\Commands;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

use Illuminate\Console\Command;

class BackupDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'backup:database';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Backup database and save path in database';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // Perform database backup
        // For example, you can use mysqldump command or Laravel's built-in database backup functionality

        $backupPath = public_path('backups/');
        if (!file_exists($backupPath)) {
            mkdir($backupPath, 0777, true);
        }

        $backupFileName = date('Y-m-d_H-i-s') . '.sql';
        $backupFilePath = $backupPath . $backupFileName;

        exec('mysqldump -u ' . env('DB_USERNAME') . ' -p"' . env('DB_PASSWORD') . '" ' . env('DB_DATABASE') . ' > ' . $backupFilePath);

        // Save backup path in the database
        DB::table('backups')->insert([
            'path' => 'backups/'.$backupFileName,
            'created_at' => now(),
        ]);

        $this->info('Database backup completed successfully.');

        // Delete backups older than 1 month
        $oldBackups = DB::table('backups')->where('created_at', '<', now()->subMonth())->get();
        foreach ($oldBackups as $oldBackup) {
            File::delete(public_path($oldBackup->path));
            DB::table('backups')->where('id', $oldBackup->id)->delete();
        }

        $this->info('Old backups deleted successfully.');
    }
}
