function* serial() {
  let i = 0;
  while (true) yield ++i;
}

const g = serial()
g.next()
g.next()
