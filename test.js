const mint = [
    ["system", 26.13220910139337],
    ["brucepon", 13.520475218958863],
    ["NiMA", 12.377061278181564],
    ["sheriff4", 10.300122707558216],
    ["santteegt", 10.070157788139039],
    ["Lrt", 9.749243631721766],
    ["Simon", 7.8385574188089535],
    ["Robin", 7.27690705196138],
    ["cyn_acf", 6.817075717784904],
    ["Matthew", 6.074440085491949]
]

console.log(String(mint[0][1]))

mint
    .filter((arr) => {
        arr[0][0] != "system"
    })
    .map((row) => {
            [row[0],
            })