import React from 'react';

function VoucherCard({ type, value, condition, code }) {
  return (
    <div className="voucher-card">
      <div className="voucher-main">
        <p className="voucher-type">{type}</p>
        <p className="voucher-value">{value}</p>
        <p className="voucher-code">Nhập mã: {code}</p>
      </div>
      <div className="voucher-side">
        <p className="voucher-condition">{condition}</p>
        <button className="voucher-button">Sao chép</button>
      </div>
    </div>
  );
}

export default VoucherCard;