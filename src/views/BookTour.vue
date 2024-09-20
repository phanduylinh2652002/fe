<template>
  <div class="untree_co-section">
    <div class="container my-5 d-flex justify-content-center">
      <div class="col-lg-6">
        <p class="title-tou__p">ĐƠN HÀNG CỦA BẠN</p>
        <table class="table">
          <thead class="thead-dark">
          <tr>
            <th>Chi Phí Tour</th>
            <th>Tạm tính</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <p> - Giá người lớn x <span></span></p>
            </td>
            <td>
              <p></p>
            </td>
          </tr>
          <tr>
            <td>
              <p> - Giá trẻ em x <span>
                    </span></p>
            </td>
            <td>
              <p></p>
            </td>
          </tr>
          <tr>
            <td>
              <p> - Giá trẻ nhỏ x <span>0</span></p>
            </td>
            <td>0</td>
          </tr>
          <tr>
            <td>
              <p> - Giá trẻ sơ sinh x <span>0</span></p>
            </td>
            <td>0</td>
          </tr>
          <tr>
            <td>Tạm tính</td>
            <td>
              </td>
          </tr>
          <tr>
            <td style="font-weight: bold;">Tổng</td>
            <td style="font-weight: bold; font-size: 17px;"></td>
          </tr>
          </tbody>

        </table>
        <div class="d-flex justify-content-between">
          <a href="" type="submit" class="btn btn-primary">Quay lại</a>
          <div class="d-flex">
            <form action="" method="post">
              <button type="submit" class="btn btn-primary">Thanh toán tại quầy</button>
            </form>
            <form action="" method="post">
              <button type="submit" class="btn btn-primary" name="redirect">Thanh toán VnPay</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var myHeader = document.querySelector(".site-nav");
myHeader.classList.add("site-nav__color");
</script>