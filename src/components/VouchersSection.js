import React from 'react';
import VoucherCard from './VoucherCard';

const vouchersData = [
    { type: 'VOUCHER', value:'10%VND', condition: 'tối đa 10K', code: 'JUL10' },
    { type: 'VOUCHER', value: '30.000VND', condition: 'đơn từ 599K', code: 'JUL30' },
    { type: 'VOUCHER', value: '70.000VND', condition: 'đơn từ 899K', code: 'JUL70' },
    { type: 'VOUCHER', value: '100.000VND', condition:'đơn từ 1199K', code: 'JUL100' },
];

function VouchersSection() {
    return (
        <section className="vouchers-section">
            <div className="container">
                <div className="section-grid">
                    {vouchersData.map((voucher, index) => (
                        <VoucherCard
                            key={index}
                            type={voucher.type}
                            value={voucher.value}
                            condition={voucher.condition}
                            code={voucher.code}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default VouchersSection;