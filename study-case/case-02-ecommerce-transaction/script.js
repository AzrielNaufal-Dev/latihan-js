// E-Commerce Transaction & Analytics System

const rawTransactionsData = [
  {
    id: "trx-001",
    customer: {
      name: "  azriel naufal  ",
      email: "AZRIEL@GMAIL.COM",
      joinDate: "2023-01-15",
    },
    items: [
      { name: "Mechanical Keyboard", price: "850000", qty: "1" },
      { name: "Gaming Mouse", price: "350000", qty: "2" },
    ],
    voucherCode: "DISCOUNT10",
    transactionDate: "2026-08-01T10:30:00.000Z",
  },
  {
    id: "trx-002",
    customer: {
      name: "  Budi Santoso ",
      email: "budi.s@yahoo.com",
      joinDate: "2025-06-20",
    },
    items: [
      { name: "Monitor 24 Inch", price: "1800000", qty: "1" },
      { name: "HDMI Cable", price: "50000", qty: "3" },
      { name: "Mousepad XL", price: "120000", qty: "1" },
    ],
    voucherCode: "PASKAS15", // Kode voucher tidak valid
    transactionDate: "2026-08-03T14:15:00.000Z",
  },
  {
    id: "trx-003",
    customer: {
      name: "SITI AMINAH",
      email: "siti.aminah@gmail.com",
      joinDate: "2021-11-05",
    },
    items: [
      { name: "Standing Desk", price: "3200000", qty: "1" },
      { name: "Ergonomic Chair", price: "2500000", qty: "1" },
    ],
    voucherCode: "BIGSALE20",
    transactionDate: "2026-08-05T09:00:00.000Z",
  },
];

let newTransactionsData = rawTransactionsData.concat();

const data1 = newTransactionsData[0];
let {
  customer: { name: nameData1, email: emailData1, joinDate: joinDateData1 },
  items: [
    { name: nameItem1, price: priceItem1, qty: qtyItem1 },
    { name: nameItem2, price: priceItem2, qty: qtyItem2 },
  ],
} = data1;

// Data Cleaning & Normalization

// 1. Name, ID, & Email
const cleanName = nameData1.trim().toUpperCase();
const cleanEmail = emailData1.toLowerCase();
const cleanId = data1.id.toUpperCase();

// 2. Price & Qty
const intPriceItem1 = Number(priceItem1);
const intPriceItem2 = Number(priceItem2);
const intQtyItem1 = parseInt(qtyItem1);
const intQtyItem2 = parseInt(qtyItem2);

// Mathematics & Roundin
let totalItemTypes = [nameItem1, nameItem2];
let totalQuantity = intQtyItem1 + intQtyItem2;
let rawSubtotal = (intPriceItem1 * intQtyItem1) + (intPriceItem2 * intQtyItem2);

let discountPercentage = 0;

if (data1.voucherCode === "DISCOUNT10") {
  discountPercentage = 10;
} else if (data1.voucherCode === "DISCOUNT20") {
  discountPercentage = 20;
} else {
  discountPercentage = 0;
}

const discountAmount = Math.floor(Math.random() * (25000 - 5000 + 1)) + 5000;
const priceAfterDiscount = rawSubtotal - discountAmount;
const taxAmount = priceAfterDiscount * 0.11;
const cashback = Math.round(Math.max(5000, Math.random() * 25000));
const totalPayment = priceAfterDiscount + taxAmount;

const isVipTransaction = totalPayment > 1000000;

// Date Object Processing
let start = new Date(joinDateData1);
let end = new Date(data1.transactionDate);
const diffms = end - start;

const loyaltyDays = Math.floor(diffms / (1000 * 60 * 60 * 24));

let formatedDate = new Date(data1.transactionDate).toLocaleDateString("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

// processedReceipt
const processedReceipt = {
  transactionId: cleanId,
  formatedDate,

  customerInfo: {
    cleanName,
    cleanEmail,
    loyaltyDays,
  },

  summaryItems: {
    totalItemTypes: totalItemTypes.length,
    totalQuantity,
  },

  financials: {
    rawSubtotal,
    appliedVoucher: data1.voucherCode,
    discountPercentage,
    discountAmount,
    taxAmount,
    cashback,
    totalPayment,
  },
  isVipTransaction,
};

// Console
console.log(`
======================================================================
               🛒 E-COMMERCE TRANSACTION & ANALYTICS RECEIPT
======================================================================
ID Transaksi     : ${processedReceipt.transactionId}
Tanggal Transaksi: ${processedReceipt.formatedDate}

👤 INFORMASI PELANGGAN:
----------------------------------------------------------------------
Nama Pelanggan   : ${processedReceipt.customerInfo.cleanName}
Email            : ${processedReceipt.customerInfo.cleanEmail}
Lama Berlangganan: ${processedReceipt.customerInfo.loyaltyDays} Hari

📦 RINGKASAN BELANJA:
----------------------------------------------------------------------
Jenis Barang     : ${processedReceipt.summaryItems.totalItemTypes} Jenis
Total Kuantitas  : ${processedReceipt.summaryItems.totalQuantity} Pcs

💰 Rincian Pembayaran:
----------------------------------------------------------------------
Subtotal         : Rp ${processedReceipt.financials.rawSubtotal.toLocaleString("id-ID")}
Voucher Digunakan: ${processedReceipt.financials.appliedVoucher} (${processedReceipt.financials.discountPercentage}%)
Potongan Diskon  : - Rp ${processedReceipt.financials.discountAmount.toLocaleString("id-ID")}
Pajak PPN (11%)  : + Rp ${processedReceipt.financials.taxAmount.toLocaleString("id-ID")}
----------------------------------------------------------------------
TOTAL BAYAR      : Rp ${processedReceipt.financials.totalPayment.toLocaleString("id-ID")}
CASHBACK DIDAPAT : Rp ${processedReceipt.financials.cashback.toLocaleString("id-ID")}
STATUS VIP TRX   : ${processedReceipt.isVipTransaction ? "YES (VIP)" : "REGULAR"}
======================================================================
                 Terima Kasih Telah Berbelanja!
`);
