---
title: 'Financial-grade API: JWT Secured Authorization Response Mode for OAuth 2.0 (JARM)'
language: 'en-US'
status: 'Reading'
date: '2022-07-08'
---

# Introduction

> This document defines a new JWT-based mode to encode authorization responses. Clients are enabled to request the transmission of the authorization response parameters along with additional data in JWT format. This mechanism enhances the security of the standard authorization response since it adds support for signing and encryption, sender authentication, audience restriction as well as protection from replay, credential leakage, and mix-up attacks. It can be combined with any response type.

## 4.1. The JWT Response Document

> The JWT always contains the following data utilized to secure the transmission:
>
> - iss - the issuer URL of the authorization server that created the response
> - aud - the client_id of the client the response is intended for
> - exp - expiration of the JWT

### 4.1.1. Response Type Code

Example of authorization code grant flow sending the `code` and `state` within the JWT:

  ```
 {
  "iss":"https://accounts.example.com",
  "aud":"s6BhdRkqt3",
  "exp":1311281970,
  "code":"PyyFaux2o7Q0YfXBU32jhw.5FXSQpvr8akv9CeRDSd0QA",
  "state":"S8NJ7uqk5fY4EjNvP_G_FtyJu6pUsvH9jsYni9dMAJw"
  }
  ```

Example of the `token`  response:

```
{
"iss":"https://accounts.example.com",
"aud":"s6BhdRkqt3",
"exp":1311281970,
"access_token":"2YotnFZFEjr1zCsicMWpAA",
"state":"S8NJ7uqk5fY4EjNvP_G_FtyJu6pUsvH9jsYni9dMAJw",
"token_type":"bearer",
"expires_in":"3600",
"scope":"example"
}
```

## 4.2. Signing and Encryption

> The JWT is either signed, or signed and encrypted. If the JWT is both signed and encrypted, the JSON document will be signed then encrypted, with the result being a Nested JWT, as defined in [RFC7519].

## 4.3. Response Encoding

> This draft defines the following response mode values:
>
> - query.jwt
> - fragment.jwt
> - form_post.jwt
> - jwt

### 4.3.1. Response Mode "query.jwt"

Redirects to client redirect URI adding a parameter `response` containing the JWT. The Content Type is `application/x-www-form-urlencoded`.

```
HTTP/1.1 302 Found
Location: https://client.example.com/cb?
response=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLm
V4YW1wbGUuY29tIiwiYXVkIjoiczZCaGRSa3F0MyIsImV4cCI6MTMxMTI4MTk3MCwiY29kZSI6IlB5eU
ZhdXgybzdRMFlmWEJVMzJqaHcuNUZYU1FwdnI4YWt2OUNlUkRTZDBRQSIsInN0YXRlIjoiUzhOSjd1cW
s1Zlk0RWpOdlBfR19GdHlKdTZwVXN2SDlqc1luaTlkTUFKdyJ9.HkdJ_TYgwBBj10C-aWuNUiA062Amq
2b0_oyuc5P0aMTQphAqC2o9WbGSkpfuHVBowlb-zJ15tBvXDIABL_t83q6ajvjtq_pqsByiRK2dLVdUw
KhW3P_9wjvI0K20gdoTNbNlP9Z41mhart4BqraIoI8e-L_EfAHfhCG_DDDv7Yg
```

> Note: "query.jwt" MUST NOT be used in conjunction with response types that contain "token" or "id_token" unless the response JWT is encrypted to prevent token leakage in the URL.

### 4.3.2. Response Mode "fragment.jwt"

Same as query, but using fragment instead of a parameter.

```
HTTP/1.1 302 Found
Location: https://client.example.com/cb#
response=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLm
V4YW1wbGUuY29tIiwiYXVkIjoiczZCaGRSa3F0MyIsImV4cCI6MTMxMTI4MTk3MCwiYWNjZXNzX3Rva2
VuIjoiMllvdG5GWkZFanIxekNzaWNNV3BBQSIsInN0YXRlIjoiUzhOSjd1cWs1Zlk0RWpOdlBfR19GdH
lKdTZwVXN2SDlqc1luaTlkTUFKdyIsInRva2VuX3R5cGUiOiJiZWFyZXIiLCJleHBpcmVzX2luIjoiMz
YwMCIsInNjb3BlIjoiZXhhbXBsZSJ9.bgHLOu2dlDjtCnvTLK7hTN_JNwoZXEBnbXQx5vd9z17v1Hyzf
Mqz00Vi002T-SWf2JEs3IVSvAe1xWLIY0TeuaiegklJx_gvB59SQIhXX2ifzRmqPoDdmJGaWZ3tnRyFW
NnEogJDqGFCo2RHtk8fXkE5IEiBD0g-tN0GS_XnxlE
```

### 4.3.3. Response Mode "form_post.jwt"

> The response parameter containing the JWT is encoded as HTML form value that is auto-submitted in the User Agent, and thus is transmitted via the HTTP POST method to the Client, with the result parameters being encoded in the body using the "application/x-www-form-urlencoded" format.

```
HTTP/1.1 200 OK
Content-Type: text/html;charset=UTF-8
Cache-Control: no-cache, no-store
Pragma: no-cache
<html>
	<head><title>Submit This Form</title></head>
	<body onload="javascript:document.forms[0].submit()">
        <form method="post" action="https://client.example.com/cb">
            <input type="hidden" name="response"
            value="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2
            FjY291bnRzLmV4YW1wbGUuY29tIiwiYXVkIjoiczZCaGRSa3F0MyIsImV4cCI6MTM
            xMTI4MTk3MCwiYWNjZXNzX3Rva2VuIjoiMllvdG5GWkZFanIxekNzaWNNV3BBQSIs
            InN0YXRlIjoiUzhOSjd1cWs1Zlk0RWpOdlBfR19GdHlKdTZwVXN2SDlqc1luaTlkT
            UFKdyIsInRva2VuX3R5cGUiOiJiZWFyZXIiLCJleHBpcmVzX2luIjoiMzYwMCIsIn
            Njb3BlIjoiZXhhbXBsZSJ9.bgHLOu2dlDjtCnvTLK7hTN_JNwoZXEBnbXQx5vd9z1
            7v1HyzfMqz00Vi002T-SWf2JEs3IVSvAe1xWLIY0TeuaiegklJx_gvB59SQIhXX2i
            fzRmqPoDdmJGaWZ3tnRyFWNnEogJDqGFCo2RHtk8fXkE5IEiBD0g-tN0GS_XnxlE"/>
		</form>
	</body>
</html>
```

The user agent auto submit sending an HTTP POST request to the callback

```
POST /cb HTTP/1.1
Host: client.example.org
Content-Type: application/x-www-form-urlencoded
response=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2
FjY291bnRzLmV4YW1wbGUuY29tIiwiYXVkIjoiczZCaGRSa3F0MyIsImV4cCI6MTM
xMTI4MTk3MCwiYWNjZXNzX3Rva2VuIjoiMllvdG5GWkZFanIxekNzaWNNV3BBQSIs
InN0YXRlIjoiUzhOSjd1cWs1Zlk0RWpOdlBfR19GdHlKdTZwVXN2SDlqc1luaTlkT
UFKdyIsInRva2VuX3R5cGUiOiJiZWFyZXIiLCJleHBpcmVzX2luIjoiMzYwMCIsIn
Njb3BlIjoiZXhhbXBsZSJ9.bgHLOu2dlDjtCnvTLK7hTN_JNwoZXEBnbXQx5vd9z1
7v1HyzfMqz00Vi002T-SWf2JEs3IVSvAe1xWLIY0TeuaiegklJx_gvB59SQIhXX2i
fzRmqPoDdmJGaWZ3tnRyFWNnEogJDqGFCo2RHtk8fXkE5IEiBD0g-tN0GS_XnxlE
```

### 4.3.4. Response Mode "jwt"

> The response mode "jwt" is a shortcut and indicates the default redirect encoding (query, fragment) for the requested response type. The default for response type "code" is "query.jwt" whereas the default for "token" and the response types defined in [OIDM], except "none", is "fragment.jwt".

