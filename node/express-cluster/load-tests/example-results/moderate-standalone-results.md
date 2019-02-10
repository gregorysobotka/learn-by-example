#### Example moderate.yml results while running the example express-cluster app in 'standalone' mode.

#### Steps to reproduce:
- npm run start:standalone
- npm run test:moderate

```
All virtual users finished
Summary report @ 17:19:14(-0800) 2019-02-09
  Scenarios launched:  1800
  Scenarios completed: 1800
  Requests completed:  1800
  RPS sent: 29.78
  Request latency:
    min: 0.8
    max: 42.1
    median: 1
    p95: 2.5
    p99: 16.3
  Scenario counts:
    0: 1800 (100%)
  Codes:
    200: 1800
  ```