<?php

namespace App\Console\Commands;

use App\Models\Block;
use Illuminate\Console\GeneratorCommand;
use Illuminate\Console\Concerns\CreatesMatchingTest;

class SassyBlock extends GeneratorCommand
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'sassy:block';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new Vue template';

    /**
     * The type of class being generated.
     *
     * @var string
     */
    protected $type = 'Vue template';

    /**
     * Get the stub file for the generator.
     *
     * @return string
     */
    protected function getStub()
    {
        return $this->laravel['path'] . '/../stubs/block.stub';
    }

    /**
     * Determine if the class already exists.
     *
     * @param  string  $rawName
     * @return bool
     */
    protected function alreadyExists($rawName)
    {
        $name = class_basename(str_replace('\\', '/', $rawName));

        $path = "{$this->laravel['path']}/../resources/js/Blocks/{$name}.vue";

        return file_exists($path);
    }

    /**
     * Replace the namespace for the given stub.
     *
     * @param  string  $stub
     * @param  string  $name
     * @return $this
     */
    protected function replaceNamespace(&$stub, $name)
    {
        $name = class_basename(str_replace('\\', '/', $name));
        $stub = str_replace('{name}', $name, $stub);

        $json = config('sassy.json');
        $stub = str_replace('{json}', $json, $stub);

        return $this;
    }

    /**
     * Get the destination class path.
     *
     * @param  string  $name
     * @return string
     */
    protected function getPath($name)
    {
        $name = class_basename(str_replace('\\', '/', $name));

        return "{$this->laravel['path']}/../resources/js/Blocks/{$name}.vue";
    }
}
