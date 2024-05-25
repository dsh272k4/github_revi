
            document.addEventListener('DOMContentLoaded', (event) => {
                const khungThanhtoans = document.querySelectorAll('.lp_khung_thanhtoan');
                const tongElement = document.querySelector('.lp_tong_gia');
    
                function capNhatTongGia() {
                    let tongGia = 0;
                    khungThanhtoans.forEach(khung => {
                        const giaDonVi = parseInt(khung.dataset.giadonvi); // Lấy giá đơn vị từ data attribute
                        const slElement = khung.querySelector('.lp_khung_tt_sl');
                        let soLuong = parseInt(slElement.textContent);
                        tongGia += soLuong * giaDonVi;
                    });
                    tongElement.textContent = 'TỔNG: ' + tongGia.toLocaleString('vi-VN') + ' K';
                }
    
                khungThanhtoans.forEach(khung => {
                    const giaDonVi = parseInt(khung.dataset.giadonvi); 
                    const botButton = khung.querySelector('.lp_khung_tt_bot');
                    const themButton = khung.querySelector('.lp_khung_tt_them');
                    const slElement = khung.querySelector('.lp_khung_tt_sl');
                    const giaElement = khung.querySelector('.lp_khung_tt_chu');
                    const xoaButton = khung.querySelector('.lp_khung_tt_xoa');
    
                    function capNhatGia() {
                        let soLuong = parseInt(slElement.textContent);
                        let tongGia = soLuong * giaDonVi;
                        giaElement.textContent = tongGia.toLocaleString('vi-VN') + ' đ';
                        capNhatTongGia();
                    }
    
                    botButton.addEventListener('click', function(event) {
                        event.preventDefault();
                        let currentValue = parseInt(slElement.textContent);
                        if (currentValue > 0) {
                            slElement.textContent = currentValue - 1;
                            capNhatGia();
                        }
                    });
    
                    themButton.addEventListener('click', function(event) {
                        event.preventDefault();
                        let currentValue = parseInt(slElement.textContent);
                        slElement.textContent = currentValue + 1;
                        capNhatGia();
                    });
    
                    xoaButton.addEventListener('click', function(event) {
                        event.preventDefault();
                        slElement.textContent = 0;
                        capNhatGia();
                    });
                    capNhatGia();
                });
                capNhatTongGia();
            });