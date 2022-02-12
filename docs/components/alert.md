# Alert

Based on [sweetalert](https://sweetalert2.github.io/)

## Confirm

Show confirm message. For better usage see [Confirm button](button#confirm)

**Usage**

```html
<x-dashboard::alert.confirm id="confirmUniqueId"
    :options="['title' => 'Are you sure']">
    <x-dashboard::button id="confirmUniqueId">
        {!! $slot !!}
    </x-dashboard::button>
</x-dashboard::alert.confirm>

@push('scripts')
    <script>
        const elem = document.getElementById('confirmUniqueId');

        // on confirm
        elem.addEventListener('confirmed', function(event) {
            console.log(event.detail)
        });

        // on cancel
        elem.addEventListener('cancelled', function(event) {
            console.log(event.detail)
        });
    </script>
@endpush
```

**Customize**

Copy [confirm.blade.php](https://github.com/laravel-dashboard-kit/dashboard-ui/tree/master/resources/views/components/alert/confirm.blade.php) to your dashboard theme under same structure `/resources/views/components/alert/confirm.blade.php`

**Available parameters**

1. `id`: Unique id to use later
2. `options`: You can pass all sweetalert [configuration](https://sweetalert2.github.io/#configuration)
