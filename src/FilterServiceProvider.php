<?php

namespace Sunchain\NovaDatePillsFilter;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class FilterServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Nova::serving(function (ServingNova $event) {
            Nova::script('nova-date-pills-filter', __DIR__.'/../dist/js/filter.js');
            $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'datesPillFilter');
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
