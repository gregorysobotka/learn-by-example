### Notes
These load test(s) (run locally) may offer some additional insight into the software you are developing and is a useful when evaluating the performance of discrete changes. However, you should only rely on the results from load when...

### Do...
- keep an eye on the p95, p99, and max request latencies.
- make sure the application(s) being tested are in an environment that is as similiar to your production environment as possible
    - The scaling logic for the application mirrors that of your production environment
    - The software / hardware matches that being used in production
    - Requests originate from regions that reflect those of your users

#### Dont...
- expect the results of load tests run in the same region (US West) as a single VM instance containing your app to reflect the performance of the app when it is deployed in multiple regions and receives significant traffic originating from multiple countries in Western Europe and South America.