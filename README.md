<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://drive.google.com/uc?export=view&id=1ZDSMr_qTmFY6qZ2DsmJPs4n2yQoJ01Z3">
    <img src="https://drive.google.com/uc?export=view&id=1IfS1LD8tcL1uvIVXopRxnaD5ZlYw_ygg" height="128">
  </picture>
  <h1 align="center">YouTube like ID</h1>
</p>

<p align="center">
  <a aria-label="NPM version" href="https://www.npmjs.com/package/ytid">
    <img alt="" src="https://img.shields.io/npm/v/ytid.svg?style=for-the-badge&labelColor=000&color=007EC6">
  </a>
  <a aria-label="NPM Weekly Downloads" href="https://www.npmjs.com/package/ytid">
    <img alt="" src="https://img.shields.io/npm/dw/ytid.svg?style=for-the-badge&labelColor=000">
  </a>
  <a aria-label="GitHub stars" href="https://github.com/pratyushly/ytid">
    <img alt="" src="https://img.shields.io/github/stars/pratyushly/ytid.svg?style=for-the-badge&labelColor=000&color=0070F3">
  </a>
  <a aria-label="License" href="https://github.com/pratyushly/ytid/blob/main/LICENSE">
    <img alt="" src="https://img.shields.io/npm/l/ytid.svg?style=for-the-badge&labelColor=000&color=ff673d">
  </a>
  <a aria-label="Publish workflow status" href="https://github.com/pratyushly/ytid/blob/main/.github/workflows/publish.yml">
    <img alt="" src="https://img.shields.io/github/actions/workflow/status/pratyushly/ytid/publish.yml?style=for-the-badge&labelColor=000">
  </a>
</p>

Create URL friendly short IDs just like YouTube.

Suitable for generating -
- short IDs for new users.
- referral code for a user in an affiliate program.
- file names for user uploaded documents / resources.
- short URLs (like [bitly](https://bitly.com)) for sharing links on social media platforms.
- URL slug for dynamically generated content like blog posts, articles, or product pages.

Works with ES6 (ECMAScript):

<img src="https://drive.google.com/uc?export=view&id=1PK32FjV63OOQ1tkFicHJiWRitnQW7mFN" width="820" title="Usage in ES6 (ECMAScript)" alt="Demo GIF of ytid working in ES6 (ECMAScript)">

as well as with CommonJS:

<img src="https://drive.google.com/uc?export=view&id=1y_YoVCSymIdEu2YwoQGln-jhX3g-mbIt" width="820" title="Usage in CommonJS" alt="Demo GIF of ytid working in ES6 CommonJS">


## Installation

Using npm:

```shell
npm i ytid
```

Using yarn:

```shell
yarn add ytid
```

Using pnpm:

```shell
pnpm i ytid
```
    
## Usage

With ES6 (ECMAScript):

```javascript
import { ytid } from "ytid";

console.log(ytid()); // gocwRvLhDf8
```

With CommonJS:

```javascript
const { ytid } = require("ytid");

console.log(ytid()); // dQw4w9WgXcQ
```


## FAQs

### What are the possible characters in the ID?

[YouTube uses](https://www.youtube.com/watch?v=gocwRvLhDf8) ```0-9```, ```A-Z```, ```a-z```, ```_``` and ```-``` as possible characters for the IDs. This makes each position in the ID have one of these 64 characters. However, as capital ```I``` and lowercase ```l``` appear very similar in the URLs (```I``` → I, ```l``` → l), ytid excludes them.

Hence, ytid uses ```0-9```, ```A-H```, ```J-Z```, ```a-k```, ```m-z```, ```_``` and ```-``` as possible characters in the ID.


### Why should URL IDs be short?

A [Backlinko's study](https://backlinko.com/search-engine-ranking#short-urls-rank), based on an analysis of 11.8 million Google search results, found that short URLs rank above long URLs.

And a [Brafton study](https://www.brafton.com/news/shorter-links-social-shares-study/) found a correlation between short URLs and more social shares, especially on platforms such as Twitter which have character limits.

These studies highlight the benefits of short URLs over long ones.

### What if the ID contains any offensive word or phrase?

All the generated IDs are checked against a dataset of offensive / profane words to ensure they do not contain any inappropriate language.

As a result, ytid doesn't generate IDs like ```7-GoToHell3``` or ```shit9RcYjcM```.

The dataset of offensive / profane words is a combination of various datasets -

<table>
  <thead>
    <tr>
      <th>Language</th>
      <th>Dataset</th>
      <th>Source</th>
      <th>Instances (Rows)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4">English</td>
      <td>Google's <a href="https://en.wikipedia.org/wiki/WDYL_(search_engine)">&quot;what do you love&quot;
          project</a></td>
      <td><a href="https://gist.github.com/jamiew/1112488">https://gist.github.com/jamiew/1112488</a></td>
      <td>451</td>
    </tr>
    <tr>
      <td>Bad Bad Words</td>
      <td><a
          href="https://www.kaggle.com/datasets/nicapotato/bad-bad-words">https://www.kaggle.com/datasets/nicapotato/bad-bad-words</a>
      </td>
      <td>1617</td>
    </tr>
    <tr>
      <td>Surge AI's The Obscenity List</td>
      <td><a href="https://github.com/surge-ai/profanity">https://github.com/surge-ai/profanity</a></td>
      <td>1598</td>
    </tr>
    <tr>
      <td>washyourmouthoutwithsoap</td>
      <td><a href="https://github.com/thisandagain/washyourmouthoutwithsoap">https://github.com/thisandagain/washyourmouthoutwithsoap</a></td>
      <td>147</td>
    </tr>
    <tr>
      <td rowspan="3">Spanish</td>
      <td>Multilingual swear profanity</td>
      <td><a href="https://www.kaggle.com/datasets/miklgr500/jigsaw-multilingual-swear-profanity">https://www.kaggle.com/datasets/miklgr500/jigsaw-multilingual-swear-profanity</a>
      </td>
      <td>366</td>
    </tr>
    <tr>
      <td>Surge AI's Spanish Dataset</td>
      <td>
      <a href="https://www.surgehq.ai/datasets/spanish-profanity-list">https://www.surgehq.ai/datasets/spanish-profanity-list</a>
      </td>
      <td>178</td>
    </tr>
    <tr>
      <td>washyourmouthoutwithsoap</td>
      <td><a href="https://github.com/thisandagain/washyourmouthoutwithsoap">https://github.com/thisandagain/washyourmouthoutwithsoap</a>
      </td>
      <td>125</td>
    </tr>
    <tr>
      <td rowspan="3">German</td>
      <td>Bad Words in German</td>
      <td><a href="https://data.world/wordlists/dirty-naughty-obscene-and-otherwise-bad-words-in-german">https://data.world/wordlists/dirty-naughty-obscene-and-otherwise-bad-words-in-german</a>
      </td>
      <td>65</td>
    </tr>
    <tr>
      <td>Surge AI's German Dataset</td>
      <td>
      <a href="https://www.surgehq.ai/datasets/german-profanity-list">https://www.surgehq.ai/datasets/german-profanity-list</a>
      </td>
      <td>165</td>
    </tr>
    <tr>
      <td>washyourmouthoutwithsoap</td>
      <td><a href="https://github.com/thisandagain/washyourmouthoutwithsoap">https://github.com/thisandagain/washyourmouthoutwithsoap</a>
      </td>
      <td>133</td>
    </tr>
  </tbody>
</table>

These datasets undergo the following preprocessing steps - 

1. Firstly, all the datasets are combined into a single dataset.
2. Then the duplicate instances are removed.
3. Then two new datasets are created -
    1. A dataset in which all spaces are replaced with ```-```.
    2. A dataset in which all spaces are replaced with ```_```.
4. These two datasets are then combined to form a new dataset.<br/>This ensures that the dataset contains phrases with spaces in the form of hyphen separated words as well as underscore separated words.
5. Then, duplicate values are removed from this new dataset.
6. Finally, only the instances that match the regex pattern ```^[A-Za-z0-9_-]{0,11}$``` are kept, while the rest are removed. This keeps the number of instances to a minimum by removing unnecessary words or phrases.

Preprocessing yields a dataset of 3467 instances, that helps ensure the generated IDs are safe for using in URLs and for sharing on social media platforms.

The preprocessing was done on this [Colab Jupyter notebook](https://colab.research.google.com/drive/1LRA3_Qa_0qCL9bkfo06ztjWkr-aP4rz1).

Future release(s) will expand the dataset to include words / phrases from other languages (that use English alphabets). 

## Stargazers

<a href="https://github.com/pratyushly/ytid/stargazers">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://reporoster.com/stars/dark/pratyushly/ytid">
    <img src="https://reporoster.com/stars/pratyushly/ytid">
  </picture>
</a>

## License

[Apache-2.0](https://github.com/pratyushly/ytid/blob/main/LICENSE)