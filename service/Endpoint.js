// export const BASE_URL = "http://localhost:8000"
// export const BASE_URL = "http://192.168.1.31:8001"
export const BASE_URL = "https://api.ngo360.id"
// export const BASE_URL = "http://devapi.mizanamanah.or.id"
// export const BASE_URL_WEB = "http://localhost:8001"
export const BASE_URL_WEB = "https://cms.ngo360.id"
export const BASE_URL_DEV_WEB = "https://dev.mizanamanah.or.id"

export const COLOR_PRIMARY = "#9a292d";
// export const BASE_URL = "http://192.168.0.190:8000"
// export const BASE_URL_WEB = "http://192.168.0.190:8000"
// export const BASE_URL_DEV_WEB = "http://192.168.0.190:8000"

// export const KEY_YAYASAN = "yayasan_roudhatul"
export const KEY_YAYASAN = "ulul_azmi_foundation"
//---------- MIDTRANS ----------
export const IS_PRODUCTION = true // Set production ada di db 
export const CLIENT_KEY_SB = 'SB-Mid-client-lZzj2SWMQuGleE8k' // Tidak berpengaruh, client key diambil dari database
export const SERVER_KEY_SB = 'SB-Mid-server-EL9q3Hv28yeMNgL9B1KRZKXL'
export const CLIENT_KEY = 'Mid-client-0nzXZGP0mCqdGFB7'
export const SERVER_KEY = 'Mid-server-bPArwCrwmUeBdm99LhqpFXnp'

export const GET_SNAP_TOKEN = BASE_URL + "/api/charge" //optional /{donation_id}
export const GET_NEXT_DONATION_ID = BASE_URL + "/api/donasi/getId"
export const GET_NEXT_ZAKAT_ID = BASE_URL + "/api/zakat/getId"
export const GET_NEXT_QURBAN_ID = BASE_URL + "/api/qurban/getId"
export const UPDATE_DEVICE_AFTER_TRANSACTION = BASE_URL + "/api/updateDeviceTransaction"
//---------- End of MIDTRANS ----------

//---------- XENDIT ----------
export const XENDIT_SNAPTOKEN = BASE_URL_DEV_WEB + "/snaptoken"
export const XENDIT_SNAPTOKEN_ZAKAT = BASE_URL_DEV_WEB + "/snaptoken-zakat"
export const XENDIT_SNAPTOKEN_QURBAN = BASE_URL_DEV_WEB + "/snaptoken-qurban"
export const DELETE_SNAPTOKEN = BASE_URL + "/api/delete-snap-token-midtrans"

//get nominal
export const GET_NOMINAL_BUTTON= BASE_URL + "/api/program/nominal"


//---------- end XENDIT ----------

//---------- Home ----------
// Banner
export const GET_DASHBOARD_BANNER = BASE_URL + "/api/dashboard/banner/" //{id_yayasan}
export const GET_DASHBOARD_BANNER_SLIDER = BASE_URL_WEB + "/api/dashboard/getSlider/" //{id}
export const GET_DASHBOARD_CONTENT = BASE_URL + "/api/dashboard/getAllContent/" //{id_yayasan}
export const GET_DASHBOARD_CONTENT2 = BASE_URL + "/api/dashboard/getAllContent2"

// Categories
export const GET_CATEGORIES = BASE_URL + "/api/program/category"
export const GET_CATEGORY_ICON = BASE_URL_WEB + "/api/program/icon/" //{id}

//total zakat
export const GET_TOTAL_ZAKAT = BASE_URL + "/api/statistic/total_zakat"
export const GET_TOTAL_DONASI = BASE_URL + "/api/statistic/total_donasi"
export const GET_TOTAL_DONATUR = BASE_URL + "/api/statistic/total_donatur"
//---------- End of Home ----------

//---------- Program ----------
// Programs
export const GET_PROGRAMS = BASE_URL + "/api/program"
export const GET_PROGRAMS_IMAGE = BASE_URL_WEB + "/api/program/image/" //{id}

export const GET_PROGRAM_DETAIL = BASE_URL + "/api/program/getIdProgram/" //{seo}
export const GET_DONATURS = BASE_URL + "/api/program/getDonaturs/" //{seo}
export const COUNT_DONATURS = BASE_URL + "/api/program/countDonaturs/" //{seo}
//---------- End of Program ----------

//---------- Zakat ----------
export const GET_ZAKAT_CATEGORIES = BASE_URL + "/api/zakat/category"
//---------- End of Zakat ----------

//---------- Qurban ----------
// export const GET_QURBAN_PRODUCTS = BASE_URL + "/api/qurban/getProduks"
export const GET_QURBAN_PRODUCTS = BASE_URL + "/api/invoice/produk"
export const GET_SYARAT_DAN_KETENTUAN = BASE_URL + "/api/qurban/syaratDanKetentuan"
//---------- End of Qurban ----------

//---------- Login ----------
export const LOGIN = BASE_URL + "/api/login"
export const LOGOUT = BASE_URL + "/api/logout" //{token}
export const FORGOT_PASSWORD = BASE_URL + "/api/user/forgot"
export const REGISTER = BASE_URL + "/api/register"
export const VERIFY_EMAIL = BASE_URL + "/api/verify/" // {token}
//---------- End of Login ----------

//---------- Riwayat ----------
export const RIWAYAT_DONASI = BASE_URL + "/api/program/history"
export const RIWAYAT_ZAKAT = BASE_URL + "/api/zakat/history"
export const RIWAYAT_QURBAN = BASE_URL + "/api/qurban/historyQurban"
//---------- End of Riwayat ----------

//---------- user ----------
export const GET_USER = BASE_URL + "/api/user" //{token}
//---------- End of user ----------

//---------- parameter ----------
export const GET_PARAMETER = BASE_URL + "/api/parameter/" //{key_parameter}
//---------- End of parameter ----------

//---------- Program ----------
// Programs
export const GET_UPDATES = BASE_URL + "/api/posting"
export const GET_UPDATES_IMAGE = BASE_URL_WEB + "/api/posting/image/" //{id}

export const GET_UPDATE_DETAIL = BASE_URL + "/api/posting/detail/" //{seo}
//---------- End of Program ----------

//---------- profile mizan ----------
export const GET_PROFILE = BASE_URL + "/api/profile"
export const GET_PROFILE_KEPENGURUSAN = BASE_URL + "/api/kepengurusan"
export const GET_PROFILE_KEPENGURUSAN_FOTO = BASE_URL + "/api/kepengurusan/foto/" //{id}
export const GET_PROFILE_SEJARAH = BASE_URL + "/api/sejarah"
//---------- End of profile mizan ----------

//---------- Profile User ----------
export const CHECK_PASSWORD = BASE_URL + "/api/user/checkPassword"
export const CHANGE_PASSWORD = BASE_URL + "/api/user/changePassword"
export const UPDATE_PROFILE = BASE_URL + "/api/edit/user"
export const GET_PROFILE_PICTURE = BASE_URL_WEB + "/api/user/image/" //{id}
export const UPDATE_PROFILE_PICTURE = BASE_URL + "/api/user/edit/foto" //{id}
//---------- End Profile User ----------

//---------- notification ----------
export const COUNT_NOTIFICATION = BASE_URL + "/api/notification/countNotification"
export const GET_NOTIFICATION = BASE_URL + "/api/notification/getNotification"
export const READ_NOTIFICATION = BASE_URL + "/api/notification/readNotification/" //{id notif}
//---------- End of notification ----------

//---------- payment vendor ----------
export const STORE_XENDIT = BASE_URL + "/api/snap-token-midtrans"
export const GET_VENDORS = BASE_URL + "/api/payment_vendors/categories"
export const GET_VENDORS_CHILD = BASE_URL + "/api/payment_vendors/" //{id_category}
export const GET_PICT_VENDOR = BASE_URL_WEB + "/api/metode/icon/" // {{id_vendor}}
//---------- End of payment vendor ----------

//---------- Footer ----------
export const REKENING_DONASI = BASE_URL + "/api/rekening-donasi"
export const KANTOR_CABANG = BASE_URL + "/api/kantor-cabang"
export const SYARAT_DAN_KATENTUAN = BASE_URL + "/api/syarat-dan-ketentuan"
export const KETENTUAN_PRIVASI = BASE_URL + "/api/ketentuan-privasi"
export const LAPORAN_AUDIT = BASE_URL + "/api/laporan-audit"
//---------- End Footer ----------

//---------- Yayasan ----------
export const GET_YAYASAN = BASE_URL + "/api/ngo-yayasan/" + KEY_YAYASAN
//---------- End of Yayasan ----------

//---------- Google reCAPTCHA --------
export const CAPTCHA_SITE_KEY = "6LfA5ssZAAAAADFZkrt39igrE4LFaXlZ05gBP0v9"
//---------- End of Google reCAPTCHA -
