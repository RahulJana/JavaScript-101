# Looping objects

---

```JS
openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
```

## Keys

`thu`, `fri`, `sat`

## Values

```JS
{
    open: 12,
    close: 22,
}
```

## Entries

```JS
openingHours: { // <- Object
        thu: {
            open: 12,
            close: 22,
        },  // Entry
        fri: {
            open: 11,
            close: 23,
        },  // Entry
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },  // Entry
    },
```
