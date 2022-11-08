# actions-base64-decode

## Usage

```yaml
  - id: base64
    uses: colpal/actions-base64-decode@v2
    with:
      # The base64 string to decode
      # Required
      base64: YmFuYW5hCm1pbGtzaGFrZQ==

      # If set, the decoded base64 is assumed to be sensitive, and will be masked
      # Optional
      # Default: true
      mask: false

  - run: script.sh
    env:
      BASE64_DECODED: ${{ steps.base64.outputs.decoded }}
```
