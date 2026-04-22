{
  description = "Discordian calendar";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flakeUtils.url = "github:numtide/flake-utils"; # TODO use upstream nix utils
  };

  outputs =
    {
      self,
      nixpkgs,
      flakeUtils,
    }:
    flakeUtils.lib.eachDefaultSystem (
      system:
      with nixpkgs.legacyPackages.${system};
      let
        buildPackages = [
          git
          nodejs
	  yarn
	  eslint
	  angular-language-server
	  typescript-go
	];

        dependencyPackages = [
        ];
        devShell =
          mkShell.override
            {
              stdenv = stdenv;
            }
            {
              buildInputs =
                buildPackages
                ++ dependencyPackages
                ++ [
                ];
            };
      in
      {
        src = ./.;
        nativeBuildInputs = buildPackages;
        buildInputs = buildPackages ++ dependencyPackages;
        meta = {
          description = "";
          homepage = "https://github.com/makuru-org/discordia-rs";
          #license = lib.licenses.; #TODO
          #mainProgram = ""; #TODO
        };
        formatter = pkgs.nixfmt;
        devShells.default = devShell;
      }
    );
}
