// Personal information
const rawNameInput = "  Azriel Naufal  ";
const randomNum = Math.random().toString().slice(3, 7);

const buyerName = rawNameInput.trim().toUpperCase();
const buyerNameLength = buyerName.length;
const customerId = `${buyerName.slice(0, 3)}-${randomNum}`;

// Purchase details
const unitPrice = "50000";
const quantity = "5";
const subTotal = parseInt(quantity) * Number(unitPrice);

// Calculation
const discountAmount = subTotal >= 100000 ? subTotal * 0.1 : 0;
const totalAfterDiscount = subTotal - discountAmount;
const tax = totalAfterDiscount * 0.11;
const totalPayment = totalAfterDiscount + tax;

const isVipMember = totalPayment > 200000;

// IDR Currency conversion

const unitPriceCurr = Number(unitPrice).toLocaleString("id-ID", {
  style: "currency",
  currency: "IDR",
});

const subTotalCurr = subTotal.toLocaleString("id-ID", {
  style: "currency",
  currency: "IDR",
});

const discountAmountCurr = discountAmount.toLocaleString("id-ID", {
  style: "currency",
  currency: "IDR",
});

const taxCurr = tax.toLocaleString("id-ID", {
  style: "currency",
  currency: "IDR",
});

const totalPaymentCurr = totalPayment.toLocaleString("id-ID", {
  style: "currency",
  currency: "IDR",
});

// Console
console.log(
  `
  ========================================
  \t\t\tSTRUK PEMBAYARAN TOKO JAVA
  ========================================
  ID Transaksi : ${customerId}
  Nama Pembeli : ${buyerName} (${buyerNameLength} karakter)
  Status VIP   : ${isVipMember}

  Detail Pembelian:
  - Harga Satuan : ${unitPriceCurr}
  - Jumlah Beli  : ${quantity}
  - Subtotal     : ${subTotalCurr}

  Kalkulasi:
  - Diskon (10%) : ${discountAmountCurr}
  - Pajak (11%)  : ${taxCurr}
  ----------------------------------------
  TOTAL BAYAR    : ${totalPaymentCurr}
  ========================================
  \t\t Terima Kasih Telah Berbelanja!`,
);
