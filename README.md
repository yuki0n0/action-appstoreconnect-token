# App Store Connect API token generator

Generate token to use App Store Connect API for GitHub Actions.<br>
See [official document](https://developer.apple.com/documentation/appstoreconnectapi) for details.

## Example usage

```yml
- name: Get token
  id: asc
  uses: yuki0n0/action-appstoreconnect-token@v1.0
  with:
    issuer id: 00000000-0000-0000-0000-000000000000
    key id: AAAAAAAAAA
    key: ${{ secrets.KEY }}

- name: Use token
  run: |
    JSON=`curl -sS -H "Authorization:Bearer ${{ steps.asc.outputs.token }}" https://api.appstoreconnect.apple.com/v1/apps`
```

## Inputs
All are required and can get from [App Store Connect](https://appstoreconnect.apple.com/access/api).<br>
See https://developer.apple.com/documentation/appstoreconnectapi/creating_api_keys_for_app_store_connect_api for details.

### issuer id
UUID like `00000000-0000-0000-0000-000000000000`.

### key id
Value like `AAAAAAAAAA`.

### key
Download `.p8` file and Set its contents to secret value on GitHub.<br>
See https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets for details.