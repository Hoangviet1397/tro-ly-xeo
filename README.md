# Trợ lý Xèo

App trợ lý riêng cho Xèo (Huỳnh Thanh Phương Anh, @xeonong — Sadako Photography,
chụp portrait / lookbook / wedding), làm theo mô hình một công ty thu nhỏ để
Xèo chỉ cần chụp và chỉnh ảnh, còn việc hành chính để cả nhà lo.

Mở app tại: https://hoangviet1397.github.io/tro-ly-xeo/

## App có gì

- **Màn hình Hôm nay:** việc cần nhớ hôm nay, job sắp chụp, job sắp trễ hạn giao ảnh.
- **6 phòng ban, mỗi phòng một bạn phụ trách:**
  Sen đón khách, Nắng lo buổi chụp, Mây lo hậu kỳ, Lúa lo tiền bạc,
  Trăng lo kể chuyện và đăng bài, Đèn lo giữ đồ.
- **Job đi qua 8 bước** từ Tư vấn tới Xong, có checklist theo loại chụp
  (Portrait / Couple / Wedding / Lookbook), mẫu tin nhắn và máy tính giá sẵn.
- **Sổ thu chi cụ thể tới từng khoản:** thu theo đợt (cọc, sau chụp, sau giao)
  và phát sinh; chi theo job, vận hành tháng, thiết bị và khấu hao.
  App tự tính lời từng job và lời tháng.
- **Báo cáo cuối ngày** sao chép được, và **ô hỏi trợ lý**: hỏi là tra sổ trả lời,
  ví dụ "ai chưa trả tiền", "tháng này lời bao nhiêu".
- **Giọng nói tiếng Việt:** bấm nút micro, nói lệnh, app hiện chữ để Xèo xác
  nhận rồi mới làm, và đọc kết quả lại. Không nghe được thì gõ tay như thường.
- **Nút 1 chạm trong mỗi job:** chép tin nhắn mẫu rồi mở Messenger / Facebook,
  gửi email soạn sẵn, mở thư mục Drive của job, tải file lịch (.ics) và thêm
  Google Lịch, tạo lời nhắc, chép giờ đặt báo thức.
  App chỉ link qua các app đó, không đăng nhập hay đồng bộ tài khoản nào.

## Giao diện bản 2.0

Làm lại theo tinh thần app iPhone: chữ hệ thống, tiêu đề lớn, danh sách nhóm,
thanh tab mờ ở dưới, tự đổi sáng/tối theo máy.

- Mỗi buổi chụp là một dòng gọn; chạm vào là mở bảng chi tiết trượt từ dưới
  lên (tiến độ, lịch, tiền, liên lạc, nhắc việc, Drive). Kéo xuống để đóng.
- Thêm job / ghi thu chi bằng nút **＋** góc trên, mở bảng nhập riêng;
  số tiền tự thêm dấu chấm, có nút chọn nhanh 500k / 1 / 2 / 5 triệu.
- **Sửa được job** (bản cũ chỉ thêm và xoá được), có nút **lùi bước** khi
  bấm nhầm tiến độ.
- Xoá job, xoá khoản thu chi, xoá dữ liệu và mở bản sao lưu đều **hỏi lại
  trước** — không còn bấm nhầm là mất.
- Tab **Trợ lý** dạng tin nhắn; ô gõ có nút micro, gõ tay cũng ra lệnh được
  ("chi makeup 2 triệu").
- Dữ liệu cũ giữ nguyên: vẫn đọc khoá `troLyXeo.v1`, cùng định dạng sao lưu JSON.

## Thêm vào màn hình chính (dùng như app thật)

Trong app, đầu màn hình **Hôm nay** có dải **"Cài lên màn hình chính"** với
nút **Cài** — bấm nút đó là xong, không cần nhớ thao tác nào khác:

- **Android / Chrome:** bấm **Cài** là Chrome hỏi cài ngay, bấm
  "Cài đặt" là xong, một chạm thôi.
- **iPhone / Safari:** bấm **Cài**, app mở bảng hướng dẫn từng bước:
  1. Mở app này bằng **Safari** (đừng mở trong Facebook hay Messenger).
  2. Bấm nút **Chia sẻ** ở dưới màn hình — hình vuông có mũi tên đi lên.
  3. Kéo xuống, bấm **"Thêm vào Màn hình chính"**.
  4. Bấm **"Thêm"** ở góc trên bên phải. Từ đó bấm icon Trợ lý Xèo trên
     màn hình chính là vào app, không cần mở trình duyệt nữa.
- Nút **✕** (hoặc "Đã thêm rồi, ẩn gợi ý này" trong bảng hướng dẫn) để ẩn
  dải này sau khi đã cài xong.
- Đã cài rồi mở app từ màn hình chính thì dải này tự ẩn luôn.

App trên GitHub Pages là PWA: mở lần đầu bằng Safari/Chrome, service worker
lưu app vào máy để mở offline những lần sau. Bản file `index.html` tải về
máy cũng dùng offline được (xem dưới), nhưng không cài lên màn hình chính
được — muốn cài thì mở link GitHub Pages rồi bấm nút trong app.

## Cách tải bản offline về điện thoại

Bản offline là đúng một file `index.html` trong repo này, dùng được cả khi
mất mạng:

1. Trên điện thoại, mở trang file
   https://github.com/Hoangviet1397/tro-ly-xeo/blob/main/index.html
   rồi bấm nút tải về (hoặc mở link trực tiếp
   https://raw.githubusercontent.com/Hoangviet1397/tro-ly-xeo/main/index.html
   và lưu file về máy).
2. Lưu file `index.html` vào app Tệp (Files) trên iPhone.
3. Mở file đó bằng Safari để dùng offline.

## Dữ liệu lưu ở đâu

- **Tự động, trên chính máy của Xèo:** mỗi lần thêm job hay ghi tiền, app ghi
  ngay vào bộ nhớ của trình duyệt trên máy đó (localStorage). Tắt app mở lại,
  job và sổ tiền vẫn còn nguyên. Không tài khoản, không máy chủ, không gửi
  dữ liệu đi đâu.
- **Sao lưu JSON (dự phòng):** trong app, mục Sao lưu có nút "Tải bản sao lưu"
  để tải file `tro-ly-xeo-sao-luu.json` về máy, và nút "Mở bản sao lưu" để mở
  lại file đó khi đổi máy. Nên tải một bản mỗi tuần.
- Lưu ý: nếu mở file offline đã tải về mà trình duyệt chặn bộ nhớ
  (một số máy mở file kiểu này sẽ chặn), app sẽ hiện dòng nhắc ngay trong mục
  Sao lưu — lúc đó Xèo nhớ bấm "Tải bản sao lưu" sau mỗi ngày chụp để giữ sổ.

## Yêu cầu

- Trình duyệt hiện đại trên điện thoại (Safari / Chrome).
- Giọng nói cần cấp quyền micro; trên iPhone, nhận diện giọng nói có thể cần
  mạng tùy máy — mất mạng thì app tự chuyển về gõ tay.
- Không cần đăng nhập gì cả.

Làm riêng cho Xèo — chụp bằng cảm xúc, để con số cho cả nhà lo.
