// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  invest_api_endpoint: 'http://localhost:8090/vaanigaInvest/admin/',
  //invest_api_endpoint: 'https://vaaniga-invest-api.herokuapp.com/vaanigaInvest/admin/',
  invest_api_dashboard_endpoint: 'https://vaaniga-invest-api.herokuapp.com/vaanigaInvest/dashboard/',
  invest_api_nseoptions_endpoint: 'http://localhost:8090/vaanigaInvest/nseIndia/',
  vaaniga_signup_endpoint: 'https://vaaniga-invest-signup.herokuapp.com/vaanigaInvest/signUp/',
  vaaniga_invest_data_endpoint: 'https://vaaniga-invest-data.herokuapp.com/vaanigaData/data/'
};
