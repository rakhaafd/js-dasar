let subjek = ''
for ( let baris = 10; baris > 0; baris--){
    for (let plusSubjek = 0; plusSubjek < baris; plusSubjek++){
        subjek += '*'
    }

    subjek += '\n'
}
console.log(subjek)