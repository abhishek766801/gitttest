{ pkgs }: {
  deps = [
    pkgs.npm run test
    pkgs.lsof
    pkgs.run
  ];
}