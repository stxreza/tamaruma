export const formatIDR = (n: number) => {
  if (n >= 1e9) {
    const b = n / 1e9;
    // Tampilkan 1.45 M, 1.89 M, 2.35 M
    return `Rp ${b.toLocaleString("id-ID", {
      minimumFractionDigits: b % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2,
    })} M`;
  }
  if (n >= 1e6) {
    const m = n / 1e6;
    return `Rp ${m.toLocaleString("id-ID", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    })} jt`;
  }
  return `Rp ${n.toLocaleString("id-ID")}`;
};
