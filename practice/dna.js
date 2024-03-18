
class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  longerStrand(strand1 = '', strand2 = "") {

    if (strand1.length > strand2.length) {

    }

  }

  hammingDistance(compareStrand) {
    let diff = 0;

    if (this.strand.length === compareStrand.length) {
      [].forEach.call(this.strand,((point, index) => {
        if (point !== compareStrand[index]) {
          diff += 1;
        }
      })
      )
      return diff;
    }
    else {

      if (this.strand.length > compareStrand.length) {
        [].forEach.call(compareStrand,((point, index) => {
          if (point !== this.strand[index]) {
            diff += 1;
          }
        })
        )

        return diff;
      } else {
        [].forEach.call(this.strand,((point, index) => {
          if (point !== compareStrand[index]) {
            diff += 1;
          }
        })
        )

        return diff;
      }

    }
  }
}


module.exports = DNA;