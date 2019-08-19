# Quiz for selection proccess

Thanks for apply to Videsk! First you need understand this is a process for select the best candidates, is not a part of the job, only we want see how you code this problem.

## The problem

We need that you can create a simple functions or class that returns a JSON that filter `example.json` by:

* Calls answered
* Calls losed
* Calls transfered
* Calls by departments
* Extra: Search by range**

This can be with `functions`, `class` or method you think is better.

** The range it is necessary to filter by the timestamp when client enter to queue.

## Schema of JSON

Here is the explanation of every key in `example.json` file.

```json
"times": {} // Is a object with times when client enter and exit from queue
"transfered": {} // Is a object with information about transfered status of queued call
"agent": "" // Is a ObjectID with the ID of agent assigned, that mean call answered and assigned
"department": "" // Is a ObjectID with the ID of department assigned or selected by client
```

## Deadline

You have until 20 August at 01:00 PM (CLT). Fork this repository and send url to `mlopez@videsk.io` with your code and name.

### Copyrights

You can share this quiz to your friends without the `example.json` file, is private.
