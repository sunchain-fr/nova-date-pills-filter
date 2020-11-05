# Nova Dates Pill Filter

![Nova Dates Pill Filter](https://raw.githubusercontent.com/sunchain-fr/nova-dates-pill-filter/master/screenshot/screenshot.png)

A date filter to use with  [Nova Dashboard](https://github.com/dcasia/nova-dashboard).

# Installation

You can install the package via composer:

```
composer require sunchain-fr/nova-dates-pill-filter
```

## Usage

Register the `DatesPillFilter` filter within your view`

```php
use Sunchain\NovaDatesPillFilter\DatesPillFilter;

class MainView extends View
{

    public function filters(): array
    {
        return [
            new DatesPillFilter()
        ];
    }

}
```

The filter will give you 2 fields, `$from` and `$to`

```php
<?php

namespace App\Nova\Dashboards\Widgets;

use Carbon\Carbon;
use DigitalCreative\NovaDashboard\Filters;
use DigitalCreative\ValueWidget\Widgets\ValueResult;
use DigitalCreative\ValueWidget\Widgets\ValueWidget;
use Illuminate\Support\Collection;
use Sunchain\NovaDatesPillFilter\DatesPillFilter;

class MyValueWidget extends ValueWidget
{
    public function resolveValue(Collection $options, Filters $filters): ValueResult
    {
            $dates = $filters->getFilterValue(DatesPillFilter::class);
            $from = Carbon::now()->subWeek();
            $to = Carbon::now();
            if (isset($dates['from']) && $dates['from'] != "") {
                $from = $dates['from'];
            }
            if (isset($dates['to']) && $dates['to'] != "") {
                $to = $dates['to'];
            }
    // build your query with $from and $to filters
    // ... 
    }
}
```

## ⭐️ Show Your Support
Please give a ⭐️ if this project helped you!

## License

The MIT License (MIT). Please see [License File](https://raw.githubusercontent.com/sunchain-fr/nova-dates-pill-filter/master/LICENSE) for more information.
