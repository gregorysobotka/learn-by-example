#### Example moderate.yml results while running the example express-cluster app in 'cluster' mode.

#### Steps to reproduce:
- npm run start
- npm run test:moderate

```
Summary report @ 17:15:55(-0800) 2019-02-09
  Scenarios launched:  1800
  Scenarios completed: 1800
  Requests completed:  1800
  RPS sent: 29.79
  Request latency:
    min: 1
    max: 30.3
    median: 1.3
    p95: 2.2
    p99: 3.8
  Scenario counts:
    0: 1800 (100%)
  Codes:
    200: 1800
  ```