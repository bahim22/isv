
# Docs

## wget, curl

```bash
#!/opt/homebrew/bin/bash

mkdir ./landing
cd ./landing || return

wget -r --no-host-directories --no-parent --reject "*.tsx*" -P ./ -I ./ "https://github.com/mui/material-ui/blob/next/docs/data/material/getting-started/templates/landing-page/"

# wget -r --no-host-directories --no-parent --reject '*.html*' -P ./ -I ./landing "$target_url"

# lftp -c mirror http://example.com/remote-dir local-dir

# Clean up any old version of curl you may have already tried to install
brew remove -f curl

# Download the curl ruby install script provided by cloudflare
wget https://raw.githubusercontent.com/cloudflare/homebrew-cloudflare/master/curl.rb

# Install curl via that script from the latest git repos
brew install --HEAD -s curl.rb

# Tell your cli to use the curl version just installed (if you're using zsh, othwerise you might need `~/.bashrc`)
# shellcheck disable=SC2086
echo "export PATH="/usr/local/opt/curl/bin:$PATH"" >> ~/.bashrc

# Reload your config
# shellcheck disable=SC1090
source ~/.bashrc

# Double check it's using the right curl
which curl # Should output "/usr/local/opt/curl/bin/curl"

# Double check http3
$ curl --version | grep HTTP3
  Features: alt-svc AsynchDNS brotli HTTP2 HTTP3 IDN IPv6 Largefile libz MultiSSL NTLM NTLM_WB SSL UnixSockets zstd

# Try curl on any HTTP/3 enabled sites.
curl --http3 https://blog.cloudflare.com -I
```

## npm

```bash
npm install test run find-dupes outdated prune dedupe
npm update ll ls
# npm config set <key>=<value> [<key>=<value> ...]
npm config get # [<key> [<key> ...]]
npm config delete # <key> [<key> ...]
npm config list [--json]
npm config edit
npm config fix
# Specify configs in the ini-formatted file: /Users/ibalde/.npmrc or in shell via:
npm command --key=value
npm set key=value # [<key>=<value> ...]
	Options:
	# [-g|--global] [-L|--location <global|user|project>]
npm cache add # <package-spec>
npm cache clean [<key>]
npm cache ls [ name@version ]
npm cache verify
npm audit, version

{
  isv: '1.0.0',
  npm: '10.7.0',
  node: '22.1.0',
  acorn: '8.11.3',
  ada: '2.7.8',
  ares: '1.28.1',
  base64: '0.5.2',
  brotli: '1.1.0',
  cjs_module_lexer: '1.2.2',
  cldr: '44.1',
  icu: '74.2',
  llhttp: '9.2.1',
  modules: '127',
  napi: '9',
  nghttp2: '1.61.0',
  openssl: '3.3.0',
  simdjson: '3.8.0',
  simdutf: '5.2.4',
  tz: '2023c',
  undici: '6.13.0',
  unicode: '15.1',
  uv: '1.48.0',
  uvwasi: '0.0.20',
  v8: '12.4.254.14-node.11',
  zlib: '1.2.12'
}

├── @emotion/react@11.11.4
├── @emotion/styled@11.11.5
├── @eslint/js@9.3.0
├── @formspree/react@2.5.1
├── @mui/icons-material@5.15.18
├── @mui/material@5.15.18
├── axios@1.7.2
├── dotenv@16.4.5
├── env-cmd@10.1.0
├── eslint-config-prettier@9.1.0
├── eslint-plugin-import@2.29.1
├── eslint-plugin-jsx-a11y@6.8.0
├── eslint-plugin-prettier@5.1.3
├── eslint-plugin-react@7.34.1
├── eslint@8.57.0
├── prettier@3.2.5
├── react-dom@18.3.1
├── react-scripts@5.0.1
└── react@18.3.1
```

## React Env

```js
render() {
  return (
    <div>
      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <form>
        <input type="hidden" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />
      </form>
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  analytics.disable();
}
```

```powershell
($env:REACT_APP_NOT_SECRET_CODE = "abcdef") -and (npm start)
```

```bash
REACT_APP_NOT_SECRET_CODE=abcdef npm start
REACT_APP_VERSION=$npm_package_version
# // or
REACT_APP_VERSION=${npm_package_version}
```
