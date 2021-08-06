# Auth

## Authentication requirements

- clients will start by authenticating with a username and password.
- Once authenticated, the server will issue a JWT that can be sent as a bearer token in the authorization header on subsequent req to prove auth

- install passoport and passport-local

## Implementing Passport Strategies

- `@nestjs/passport` module wraps it as a nest style
- in vanila Passport, configure a strategy by providing 2 things
  - a set of options specific to that strategy. For example, in a JWT strategy, you might provide a secret to sign tokens
  - A "verify callback", which is where you tell Passport how to interact with your user store, and where their credentials are valid.
