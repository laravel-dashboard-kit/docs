# Button

**Usage**

```html
<x-dashboard::button color="primary">
    Click here
</x-dashboard::button>
```

**Customize**

Copy [button.blade.php](https://github.com/laravel-dashboard-kit/dashboard-ui/tree/master/resources/views/components/button.blade.php) to your dashboard theme under same structure `/resources/views/components/button.blade.php`

**Available parameters**

1. `color`: Button color, default `default`

## Confirm

Quick usage for [Confirm alert](alert#confirm)

**Usage**

```html
<x-dashboard::button.confirm id="confirm123"
    :options="['title' => 'Are you sure you want to delete?']"
    color="warning">
    Confirm button text
</x-dashboard::button.confirm>

@push('scripts')
    <script>
        const elem = document.getElementById('confirm123');

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

Copy [confirm.blade.php](https://github.com/laravel-dashboard-kit/dashboard-ui/tree/master/resources/views/components/button/confirm.blade.php) to your dashboard theme under same structure `/resources/views/components/button/confirm.blade.php`

**Available parameters**

1. `id`: Unique id to use later
2. `color`: Button color, default `danger`
3. `options`: Options array will be used in [Confirm alert](#confirm)
