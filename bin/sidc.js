module.exports = {
  generic:
    s => 
      `${s[0]}*${s[2]}*${s.substring(4, 10) || '------'}*****`
}
