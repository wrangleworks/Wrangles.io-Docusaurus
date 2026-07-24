## Score Search Results

Scores and filters search results based on progressive partial/exact matching. Can return dictionaries or a parallel list of formatted strings.

### Metadata

| Field | Value |
| --- | --- |
| ID | 313a8ec0-cf13-4956-8d3b-5362b8641d0f |
| Wrangle Key | `compute.score_search_results` |
| Type | compute |
| Subtype | score_search_results |
| Variant | stock |
| Status | active |
| Tags | Compute, compute, score_search_results |

### Access

| Requirement | Value |
| --- | --- |
| AI-backed | No |
| Requires WrangleWorks account | No |
| Requires subscription | No |
| Requires external API key | No |

### Parameters

| Parameter | Label | UI Type | Required | Description | Allowed Values | Default |
| --- | --- | --- | --- | --- | --- | --- |
| input | Input | list | Yes | List of 3 to 5 columns -&gt; [results, suppliers, part_codes, mpns (optional), descriptions (optional)] |  | ["Column A", "Column B"] |
| output | Output | list | Yes | Output column for the dictionaries. If a list of 2 is provided, outputs [dicts_column, pretty_strings_column]. |  | ["Score Search Results Output"] |
| allow_mpn_exact | Allow Mpn Exact | boolean | No | Treat exact MPN matches as valid part code matches. |  | false |
| allow_mpn_partial | Allow Mpn Partial | boolean | No | Treat partial MPN matches as valid part code matches. |  | false |
| allow_other_exact | Allow Other Exact | boolean | No | Treat exact other part code matches as valid part code matches. |  | false |
| allow_other_partial | Allow Other Partial | boolean | No | Treat partial other part code matches as valid part code matches. |  | false |
| blacklist_keywords | Blacklist Keywords | list | No | Comma-separated list or array of keywords to filter out URLs containing them. |  | [] |
| context_match_base | Context Match Base | number | No |  |  | "" |
| fuzzy_match_threshold | Fuzzy Match Threshold | number | No |  |  | "" |
| mpn_exact_score | Mpn Exact Score | number | No |  |  | "" |
| mpn_partial_base | Mpn Partial Base | number | No |  |  | "" |
| must_match_part_code | Must Match Part Code | boolean | No | If true, filters out results that don't satisfy the allowed match types. |  | false |
| part_code_exact_score | Part Code Exact Score | number | No |  |  | "" |
| part_code_partial_base | Part Code Partial Base | number | No |  |  | "" |
| supplier_exact_score | Supplier Exact Score | number | No |  |  | "" |
| supplier_partial_base | Supplier Partial Base | number | No |  |  | "" |

### Defaults

```json
{
  "input": [
    "Column A",
    "Column B"
  ],
  "output": [
    "Score Search Results Output"
  ],
  "allow_mpn_exact": false,
  "mpn_exact_score": "",
  "mpn_partial_base": "",
  "allow_mpn_partial": false,
  "allow_other_exact": false,
  "blacklist_keywords": [],
  "context_match_base": "",
  "allow_other_partial": false,
  "must_match_part_code": false,
  "supplier_exact_score": "",
  "fuzzy_match_threshold": "",
  "part_code_exact_score": "",
  "supplier_partial_base": "",
  "part_code_partial_base": ""
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
