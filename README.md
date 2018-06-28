# Description

A simple server that sends an array of random numbers. It does not respond immediately and fails on every third request.

# Installing

`npm install`

# Running

Execute `npm start` to run a server on port `1234`.

# API

`GET /array`

## Success

```
{
  result: Array<number>
}
```

## Error

```
{
  error: string
}
```
