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
