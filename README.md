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

## Cài đặt — thông số của Xèo

Bấm bánh răng góc trên (tab Hôm nay / Phòng ban), hoặc Phòng ban → **Thông số của Xèo**.
Gõ tới đâu tự lưu tới đó.

- **Tên gọi, tên studio:** dùng trong lời chào, tin nhắn mẫu, báo giá, báo cáo.
- **Bảng giá gói** (Portrait, Couple, Wedding, Lookbook, Event): thêm job mới tự điền
  giá theo gói; máy tính giá ở Phòng Đón Khách dùng bảng này.
- **Phụ phí:** thêm giờ, thêm địa điểm, retouch mỗi ảnh, album.
- **% cọc** (báo giá + tin nhắn mẫu) và **số ngày giao ảnh** (hạn giao tự điền
  sau ngày chụp).
- **Thiết bị & khấu hao:** nhập giá mua và số năm định dùng, app tính khấu hao
  mỗi tháng; một nút ghi khấu hao tháng này vào sổ (mỗi tháng ghi một lần).
- **Chi cố định hằng tháng:** phần mềm, cloud, mặt bằng…; đầu tháng một nút ghi hết.
- Cài đặt nằm chung trong bản sao lưu JSON; "Xoá dữ liệu" không xoá cài đặt.
- **Instagram @ và giới thiệu ngắn:** dùng cho mục Ảnh của Xèo, chân trang và tin nhắn mẫu cho khách hỏi giá.

## Lần đầu mở app

- **Màn chào mừng** hoa cánh bướm (bó hoa nở dần, cánh hoa rơi) + 3 trang hướng dẫn:
  năm tab, vài mẹo nhỏ, rồi chọn **Bắt đầu sổ trống — dùng thật** hoặc **Xem thử với dữ liệu mẫu**.
- Xem lại bất cứ lúc nào: Phòng ban → **Hướng dẫn sử dụng**.
- Khi đang có dữ liệu mẫu, đầu trang Hôm nay có dải **"Đang xem dữ liệu mẫu"** với nút
  **Dùng thật — xoá dữ liệu mẫu** (hỏi lại trước; cài đặt giá, cọc, thiết bị giữ nguyên).

## Xem Google Lịch ngay trong app (không cần file)

- Tab **Buổi chụp** → nút **Lịch**: dòng thời gian 30 ngày tới, buổi chụp trong app và sự kiện Google Lịch
  xếp chung theo ngày. Trang Hôm nay cũng hiện sự kiện Google của hôm nay.
- Chạm sự kiện Google → **Thêm thành buổi chụp** (tự điền tên khách, loại, giờ, địa điểm, giá, hạn giao)
  hoặc mở trong Google Lịch. Buổi đã thêm không hiện trùng.
- Kết nối bằng đăng nhập Google, **chỉ quyền đọc lịch**, không qua máy chủ nào; mã đăng nhập chỉ nằm trên máy,
  hết hạn sau ~1 giờ (bấm "Kết nối lại"). Lịch đã tải được lưu lại nên mất mạng vẫn xem.
- Cần làm **một lần**: tạo Google Client ID (Google Cloud → bật Google Calendar API → màn hình xin quyền
  chế độ Testing + thêm Gmail của Xèo làm test user → tạo OAuth client loại Web application với
  origin `https://hoangviet1397.github.io` và redirect `https://hoangviet1397.github.io/tro-ly-xeo/`),
  rồi dán vào Cài đặt → Google Lịch → Client ID. Hướng dẫn chi tiết có trong app (Cài đặt → Cách lấy Client ID).
- Lịch iPhone (iCloud) không cho app web đọc thẳng — bật đồng bộ sang Google Lịch là xem được.

## Dữ liệu ở đâu, cập nhật thế nào

- **Mọi dữ liệu nằm trên máy của Xèo** (bộ nhớ trình duyệt): job, sổ tiền, cài đặt, lịch đã tải, gợi ý từ Gmail,
  danh bạ. Không gửi lên GitHub hay máy chủ nào. GitHub chỉ là chỗ tải file app về lần đầu và khi cập nhật.
- **Dùng offline:** app luôn chạy bản đã lưu trên máy. Có mạng mà GitHub có bản mới thì app tải sẵn và hiện
  dải **"Có bản cập nhật mới"** ở trang Hôm nay — bấm **Cập nhật** mới chuyển, dữ liệu giữ nguyên.
  Cài đặt → Phiên bản → **Kiểm tra** để tự kiểm tra.
- Mã đăng nhập Google chỉ giữ trong phiên đang mở (đóng app là mất, hết hạn sau ~1 giờ) — đó là chìa khoá tạm,
  không phải dữ liệu.

## Bảo mật

- **Khoá app bằng Face ID** (hoặc vân tay / mật mã máy, qua passkey của máy) + **mã PIN dự phòng** (sai 5 lần thì
  tạm khoá, mỗi lần lâu hơn). Rời app quá 2 phút là khoá lại. Đây là khoá màn hình của app; dữ liệu vẫn nằm
  trong trình duyệt của máy, nên đặt cả mật mã cho điện thoại.
- Chính sách bảo mật nội dung (CSP): app chỉ được kết nối tới chính nó và Google API; không nhúng được vào trang khác;
  không gửi địa chỉ trang đi (no-referrer).
- Đăng nhập Google kiểm tra mã state chống giả mạo, xoá mã khỏi thanh địa chỉ ngay; chỉ xin quyền theo tính năng bật;
  ngắt kết nối là thu hồi quyền và xoá dữ liệu Google đã lưu.
- Dữ liệu đọc từ máy / file sao lưu luôn được làm sạch; chữ của khách luôn được lọc trước khi hiện; link chỉ mở http(s);
  email gửi đi chặn chèn header (Bcc lén).
- Lưu ý: các app khác của cùng tài khoản GitHub Pages (hoangviet1397.github.io) dùng chung vùng nhớ trình duyệt.
  Trên máy Xèo chỉ nên mở app này; muốn tách hẳn thì chuyển sang tên miền riêng.

## Ghi Google Lịch + email cho khách

- Cài đặt → Lấy gì từ Google → **Ghi buổi chụp vào Google Lịch**: lưu job có ngày chụp là tự thêm / cập nhật sự kiện
  (2 tiếng, nhắc trước 12 tiếng và 1 tiếng); xoá job thì xoá luôn sự kiện app đã tạo. Trong chi tiết job có nút
  "Thêm / Cập nhật trên Google Lịch".
- **Email cho khách:** 5 mẫu soạn sẵn — Xác nhận lịch chụp, Đã nhận cọc, Nhắc trước ngày chụp, Giao ảnh, Nhắc thanh toán.
  Sửa thoải mái rồi bấm **Gửi bằng Gmail** (bật "Gửi email cho khách bằng Gmail"), hoặc mở bằng app Mail / chép.
  App hỏi "Báo cho khách luôn?" khi vừa thêm job có ngày, vừa nhận cọc, vừa chuyển sang Đã giao. Không bao giờ tự gửi.

## Giao diện kính mờ

Nền màu loang nhẹ (sapphire, hồng cánh bướm, kem), thẻ / thanh tab / bảng trượt dạng kính mờ kiểu iOS.
Tắt ở Cài đặt → Giao diện → Kính mờ kiểu iOS nếu máy chạy chậm.

## Kết nối Google: Gmail, Danh bạ, Drive (cùng một lần đăng nhập)

Cài đặt → **Lấy gì từ Google**: bật tính năng nào thì app xin đúng quyền **đọc** cho tính năng đó.
Không có gì tự ghi vào sổ — app chỉ gợi ý, Xèo bấm mới ghi.

- **Gmail · tiền về:** đọc email báo biến động số dư của ngân hàng (45 ngày gần nhất), lấy số tiền vào
  + nội dung chuyển khoản, đoán khách (theo tên trong nội dung, số tiền còn thiếu, số tiền cọc) và loại
  khoản (cọc / sau buổi chụp / sau giao ảnh). Hiện ở tab Tiền bạc → chạm → "Ghi vào sổ…" (form điền sẵn)
  hoặc bỏ qua. Bỏ qua giao dịch trừ tiền và dòng số dư. Khoản đã ghi không hiện lại.
- **Gmail · khách hỏi chụp:** tìm email 30 ngày gần nhất hỏi lịch / giá chụp (bỏ thư quảng cáo, no-reply,
  ngân hàng, khách đã có trong sổ). Hiện đầu tab Buổi chụp → tạo buổi chụp ở bước Tư vấn, điền sẵn tên, email.
- **Danh bạ:** gõ tên khách trong form là có gợi ý, chọn đúng tên thì tự điền số điện thoại + email.
  Mỗi job có ô **Điện thoại**, trong chi tiết có nút **Gọi** và **Nhắn Zalo**.
- **Google Drive:** trong chi tiết job → "Chọn thư mục từ Google Drive", tìm theo tên (chỉ xem tên + link thư mục).
- Trang Hôm nay nhắc "N khoản tiền mới từ Gmail chưa ghi sổ", "N khách hỏi chụp qua Gmail".
- Google Cloud cần bật thêm **Gmail API, People API, Google Drive API** và thêm quyền
  gmail.readonly, contacts.readonly, drive.metadata.readonly ở mục Data access (hướng dẫn trong app).

## Nạp buổi chụp từ lịch

- Ở trang cuối màn chào mừng, đầu phần **Cài đặt**, hoặc Phòng ban → **Nạp buổi chụp từ lịch**.
- App web không được đọc thẳng lịch trên điện thoại, nên nạp bằng file: Google Lịch trên máy tính →
  Cài đặt → Nhập & xuất → **Xuất** ra file .zip, chọn thẳng file .zip đó (app tự giải nén) hoặc file .ics.
- App hiện danh sách sự kiện để tick chọn (lọc Sắp tới / Từ 2 tháng trước / Tất cả), tự đoán loại chụp
  theo tên (cưới, couple, lookbook, chân dung, sự kiện), điền giá + hạn giao theo Cài đặt, bỏ sự kiện
  đã huỷ, không chọn sẵn sự kiện lặp lại, và đánh dấu "Đã có" những buổi đã nạp rồi.
- Đang có dữ liệu mẫu thì có công tắc xoá dữ liệu mẫu trước khi nạp.

## Thao tác

Chỉ chạm và vuốt dọc: không chụm/chạm đúp để phóng to, không có hàng nào phải kéo ngang
(nút lọc xuống dòng, ảnh xếp lưới). Màn chào mừng lật trang bằng vuốt trái/phải hoặc chạm chấm tròn.

## Vui mỗi ngày (E.L.F. mode)

- **Hoa cánh bướm bay khắp app:** vài cánh hoa và bông nhỏ trôi nhẹ trên nền; chạm nút / dòng nào là
  chùm cánh hoa toả ra từ chỗ ngón tay; lướt trang, bảng hay hàng ảnh là hoa bay theo hướng lướt;
  ăn mừng thì nổ chùm hoa to. Tắt riêng ở Cài đặt → Giao diện → Hoa cánh bướm bay
  (máy bật "giảm chuyển động" thì tự tắt).

- **Câu của hôm nay** trên màn Hôm nay: mỗi ngày một câu vui về nghề chụp ảnh và Super Junior,
  bấm "Câu khác" hoặc chạm sticker để đổi, "Chép gửi bạn" để gửi.
- **Sticker E.L.F. tự vẽ** (nhân vật tròn màu Pearl Sapphire Blue: vương miện, lightstick, máy ảnh,
  tim, mũ tiệc, ngủ). Không dùng ảnh hay sticker chính thức của nhóm vì vướng bản quyền.
- **Chibi 9 thành viên Super Junior** (tự vẽ bằng SVG, không phải chân dung): Leeteuk (hào quang, cánh),
  Heechul (gương), Yesung (rùa), Shindong (kính râm, máy quay), Eunhyuk (sữa dâu), Donghae (cá),
  Siwon (cà vạt, nụ cười lấp lánh), Ryeowook (mũ đầu bếp), Kyuhyun (tay cầm game).
  Có ở câu nói hôm nay, khung chat, ăn mừng, và **Góc E.L.F.** trong tab Phòng ban (chạm vào ai người đó nói một câu).
- Sticker bật lên ăn mừng khi chuẩn bị đủ đồ, giao ảnh, xong job, khách trả đủ tiền.
- Hỏi trợ lý về Suju (tên thành viên, "suju", "E.L.F.") là được trả lời vui.
- Cài đặt → Giao diện: chọn màu **Pearl Sapphire Blue** (mặc định) hoặc **Hồng đất**,
  và bật/tắt sticker & câu vui.

## Chuẩn bị đồ

- Danh sách riêng cho từng buổi chụp sắp tới (chọn ở hàng nút trên cùng) — buổi sau tự có
  danh sách mới, khỏi phải bỏ tick.
- Nút **Làm mới** bỏ tick hết; **Thêm món** để bổ sung đồ riêng của Xèo (có nút xoá cho món tự thêm).

## Ảnh trong app

Ảnh đầu trang và mục **Ảnh của Xèo** là ảnh Xèo chụp, lấy từ Instagram
[@xeonong](https://www.instagram.com/xeonong/) (bản 640px công khai), gắn thẳng vào `index.html`
để mở offline được. Chạm vào ảnh là mở bài gốc trên Instagram.

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
