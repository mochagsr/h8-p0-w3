var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];


function dataHandling2(input) {
  input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
  input.splice(4, 1, "Pria", "SMA Internasional Metro")
  input[3] = input[3].split("/")
  //console.log(input[3][1])
  var bulan = input[3][1]
  //console.log(bulan)
  var desc = input[3]
  desc.sort(function (a, b) {
    return (b - a)
  })
  var nama = input[1]
  console.log(input)
  switch (bulan) {
    case '01':
      console.log('Januari')
      break;
    case '02':
      console.log('Februari')
      break;
    case '03':
      console.log('Maret')
      break;
    case '04':
      console.log('April')
      break;
    case '05':
      console.log('Mei')
      break;
    case '06':
      console.log('Juni')
      break;
    case '07':
      console.log('Juli')
      break;
    case '08':
      console.log('Agustus')
      break;
    case '09':
      console.log('September')
      break;
    case '10':
      console.log('Oktober')
      break;
    case '11':
      console.log('November')
      break;
    case '12':
      console.log('Desember')
      break;


    default:
      console.log('salah')
      break;
  }
  console.log(desc)
  console.log(input[3].join("-"))
  return (nama.substring(0, 15))
  //return input
}





console.log(dataHandling2(input))



/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */