# FreightCalculator
[![SAP](https://i.imgur.com/kkQTp3m.png)](https://cloudplatform.sap.com)

A freight calculator app used as backend system in the SMB Summit 2018 Hands On exercise. 

## Pre Requisites
* A free trial account on  [SAP Cloud Platform](https://cloudplatform.sap.com) with **Cloud Foundry Trial** initialized
* Install and configure the [Cloud Foundry Command Line Interface (CLI)](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/75125ef1e60e490e91eb58fe48c0f9e7.html#loio4ef907afb1254e8286882a2bdef0edf4) on your machine
* A [Shippo test API token](https://goshippo.com/docs/test-mode)

## Installation
1 - Clone or download this repo. 

2 - Using the [Cloud Foundry CLI](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html) push the app to the SAP CP Cloud Foundry
```sh
$ cf push
```
3 - Set the Shippo API Token as an environment variable
```sh
$ cf set-env freightcalc SHIPPO_KEY <your test api token>
```
4 - Restart the app so the environment variable can be read
```sh
$ cf restart freightcalc
```
4 - Access your app in the URL shown in the terminal.

## License
FreightCalculator  is released under the terms of the MIT license. See [LICENSE](LICENSE) for more information or see https://opensource.org/licenses/MIT.
