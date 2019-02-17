# Specification (YAML)

```yaml
paths:
  /auth/register:
    post:
      description: |
        Register a new user.
      consumes:
        - application/json
      produces:
        - application/json
      parameters:
        - in: body
          name: body
          description: |
            Registration form values.
          required: true
      responses:
        200:
          description: >
            User would be redirected to login page.
        400:
          description: >
            Error occurred.
```

# Request and Response Sample

1. register

- Request

  ```
  curl GET \
    http:// {hostname}/auth/register \
    -H 'content-type: application/json' \
    -d '{
      "user_name": "Alice",
      "password": "098f6bcd4621d373cade4e832627b4f6",
      "email": "test@xxx.com"
    }'
  ```

- Reponse

  ```json
  {
    "result": "SUCCESS"
  }
  ```

```

```
