<?php

namespace Sunchain\NovaDatesPillFilter;

use Illuminate\Http\Request;
use Carbon\Carbon;
use Laravel\Nova\Filters\Filter;

class DatesPillFilter extends Filter
{
    /**
     * The filter's component.
     *
     * @var string
     */
    public $component = 'nova-dates-pill-filter';

    public function __construct()
    {
        $this->withMeta([
            'from' => Carbon::now()->subDay()->subWeek()->toDateString(),
            'to' => Carbon::now()->subDay()->toDateString(),
        ]);
    }

    /**
     * Apply the filter to the given query.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param mixed $value
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function apply(Request $request, $query, $value)
    {
        return $query; // Not called
    }

    /**
     * Get the filter's available options.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function options(Request $request)
    {
        return [
            __('datesPillFilter::common.day') => 'day',
            __('datesPillFilter::common.week') => 'week',
            __('datesPillFilter::common.month') => 'month',
            __('datesPillFilter::common.year') => 'year',
        ];
    }
}
