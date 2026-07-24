## Huggingface

Use a model from huggingface

### Metadata

| Field | Value |
| --- | --- |
| ID | ae12cf20-4934-428f-84a9-a6898cb7ffe0 |
| Wrangle Key | `huggingface` |
| Type | ai |
| Subtype |  |
| Variant | stock |
| Status | active |
| Tags | AI, huggingface |

### Access

| Requirement | Value |
| --- | --- |
| AI-backed | Yes |
| Requires WrangleWorks account | No |
| Requires subscription | No |
| Requires external API key | No |

### Parameters

| Parameter | Label | UI Type | Required | Description | Allowed Values | Default |
| --- | --- | --- | --- | --- | --- | --- |
| input | Input | list | Yes | Name of the input column. |  | ["Column A", "Column B"] |
| output | Output | list | No | Name of the output column. If not provided, will overwrite the input column |  | ["Huggingface Output"] |
| api_token | Api Token | text | Yes | Huggingface API Token |  | "" |
| model | Model | text | Yes | Name of the model to use. e.g. facebook/bart-large-cnn |  | "" |
| parameters | Parameters | json | No | Optionally, provide additional parameters to define the model behaviour |  | "" |

### Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "model": "",
  "output": [
    "Huggingface Output"
  ],
  "api_token": "",
  "parameters": ""
}
```

### Examples

_No examples are currently available._

### Source

| Field | Value |
| --- | --- |
| Docs Path |  |
| Docs URL |  |
| Legacy Path |  |
| Catalog Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleCatalog.generated.js |
| Mapping Source | my-docs-site/src/components/WrangleFlowPlayground/wrangleMappings.json |
