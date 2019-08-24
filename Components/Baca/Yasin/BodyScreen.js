import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import { Content, Text} from "native-base";

export default class BodyScreen extends Component{
  render(){
    return(
      <View style={style.container}>
      <ScrollView style={style.wrepper}>
      <Content style={{backgroundColor: '#F3FEFF' }}>
        <View style={style.bismillah}>
          <Text style={style.innerBismillah}>
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            يس ﴿١﴾
          </Text>
          <Text style={style.innerText}>
            Yaa siin
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَالْقُرْآنِ الْحَكِيمِ ﴿٢﴾
          </Text>
          <Text style={style.innerText}>
            Demi Al Quran yang penuh hikmah,
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            إِنَّكَ لَمِنَ الْمُرْسَلِينَ ﴿٣﴾
          </Text>
          <Text style={style.innerText}>
            Sesungguhnya kamu salah seorang dari rasul-rasul,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            عَلَى صِرَاطٍ مُّسْتَقِيمٍ ﴿٤﴾
          </Text>
          <Text style={style.innerText}>
            (yang berada) diatas jalan yang lurus,
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            تَنزِيلَ الْعَزِيزِ الرَّحِيمِ ﴿٥﴾
          </Text>
          <Text style={style.innerText}>
            (sebagai wahyu) yang diturunkan oleh Yang Maha Perkasa lagi Maha Penyayang,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            لِتُنذِرَ قَوْمًا مَّا أُنذِرَ آبَاؤُهُمْ فَهُمْ غَافِلُونَ ﴿٦﴾
          </Text>
          <Text style={style.innerText}>
            Agar kamu memberi peringatan kepada kaum yang bapak-bapak mereka belum pernah diberi peringatan, karena itu mereka lalai.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            لَقَدْ حَقَّ الْقَوْلُ عَلَى أَكْثَرِهِمْ فَهُمْ لَا يُؤْمِنُونَ ﴿٧﴾
          </Text>
          <Text style={style.innerText}>
            Sesungguhnya telah pasti berlaku perkataan (ketentuan Allah) terhadap kebanyakan mereka, kerena mereka tidak beriman.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            إِنَّا جَعَلْنَا فِي أَعْنَاقِهِمْ أَغْلاَلاً فَهِيَ إِلَى الأَذْقَانِ فَهُم مُّقْمَحُونَ ﴿٨﴾
          </Text>
          <Text style={style.innerText}>
            Sesungguhnya Kami telah memasang belenggu dileher mereka, lalu tangan mereka (diangkat) ke dagu, maka karena itu mereka tertengadah.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَجَعَلْنَا مِن بَيْنِ أَيْدِيهِمْ سَدًّا وَمِنْ خَلْفِهِمْ سَدًّا فَأَغْشَيْنَاهُمْ فَهُمْ لاَ يُبْصِرُونَ ﴿٩﴾
          </Text>
          <Text style={style.innerText}>
            Dan Kami adakan di hadapan mereka dinding dan di belakang mereka dinding (pula), dan Kami tutup (mata) mereka sehingga mereka tidak dapat melihat.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَسَوَاء عَلَيْهِمْ أَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ لاَ يُؤْمِنُونَ ﴿١٠﴾
          </Text>
          <Text style={style.innerText}>
            Sama saja bagi mereka apakah kamu memberi peringatan kepada mereka ataukah kamu tidak memberi peringatan kepada mereka, mereka tidak akan beriman.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            إِنَّمَا تُنذِرُ مَنِ اتَّبَعَ الذِّكْرَ وَخَشِيَ الرَّحْمَن بِالْغَيْبِ فَبَشِّرْهُ بِمَغْفِرَةٍ وَأَجْرٍ كَرِيمٍ ﴿١١﴾
          </Text>
          <Text style={style.innerText}>
            Sesungguhnya kamu hanya memberi peringatan kepada orang-orang yang mau mengikuti peringatan dan yang takut kepada Tuhan Yang Maha Pemurah walaupun dia tidak melihatnya. Maka berilah mereka kabar gembira dengan ampunan dan pahala yang mulia.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            إِنَّا نَحْنُ نُحْيِي الْمَوْتَى وَنَكْتُبُ مَا قَدَّمُوا وَآثَارَهُمْ وَكُلَّ شَيْءٍ أحْصَيْنَاهُ فِي إِمَامٍ مُبِينٍ ﴿١٢﴾
          </Text>
          <Text style={style.innerText}>
            Sesungguhnya Kami menghidupkan orang-orang mati dan Kami menuliskan apa yang telah mereka kerjakan dan bekas-bekas yang mereka tinggalkan. Dan segala sesuatu Kami kumpulkan dalam Kitab Induk yang nyata (Lauh Mahfuzh).
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَاضْرِبْ لَهُم مَّثَلاً أَصْحَابَ الْقَرْيَةِ إِذْ جَاءهَا الْمُرْسَلُونَ ﴿١٣﴾
          </Text>
          <Text style={style.innerText}>
            Dan buatlah bagi mereka suatu perumpamaan, yaitu penduduk suatu negeri ketika utusan-utusan datang kepada mereka.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            إِذْ أَرْسَلْنَا إِلَيْهِمُ اثْنَيْنِ فَكَذَّبُوهُمَا فَعَزَّزْنَا بِثَالِثٍ فَقَالُوا إِنَّا إِلَيْكُم مُّرْسَلُونَ ﴿١٤﴾
          </Text>
          <Text style={style.innerText}>
            (yaitu) ketika Kami mengutus kepada mereka dua orang utusan, lalu mereka mendustakan keduanya; kemudian Kami kuatkan dengan (utusan) yang ketiga, maka ketiga utusan itu berkata: "Sesungguhnya kami adalah orang-orang di utus kepadamu".
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            قَالُوا مَا أَنتُمْ إِلاَّ بَشَرٌ مِّثْلُنَا وَمَا أَنزَلَ الرَّحْمن مِن شَيْءٍ إِنْ أَنتُمْ إِلاَّ تَكْذِبُونَ ﴿١٥﴾
          </Text>
          <Text style={style.innerText}>
            Mereka menjawab: "Kamu tidak lain hanyalah manusia seperti kami dan Allah Yang Maha Pemurah tidak menurunkan sesuatupun, kamu tidak lain hanyalah pendusta belaka".
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            قَالُوا رَبُّنَا يَعْلَمُ إِنَّا إِلَيْكُمْ لَمُرْسَلُونَ ﴿١٦﴾
          </Text>
          <Text style={style.innerText}>
            Mereka berkata: "Tuhan kami mengetahui bahwa sesungguhnya kami adalah orang yang diutus kepada kamu".
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَمَا عَلَيْنَا إِلاَّ الْبَلاَغُ الْمُبِينُ ﴿١٧﴾
          </Text>
          <Text style={style.innerText}>
            Dan kewajiban kami tidak lain hanyalah menyampaikan (perintah Allah) dengan jelas".
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            قَالُوا إِنَّا تَطَيَّرْنَا بِكُمْ لَئِن لَّمْ تَنتَهُوا لَنَرْجُمَنَّكُمْ وَلَيَمَسَّنَّكُم مِّنَّا عَذَابٌ أَلِيمٌ ﴿١٨﴾
          </Text>
          <Text style={style.innerText}>
            Mereka menjawab: "Sesungguhnya kami bernasib malang karena kamu, sesungguhnya jika kamu tidak berhenti (menyeru kami), niscaya kami akan merajam kamu dan kamu pasti akan mendapat siksa yang pedih dari kami".
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            قَالُوا طَائِرُكُمْ مَعَكُمْ أَئِن ذُكِّرْتُم بَلْ أَنتُمْ قَوْمٌ مُّسْرِفُونَ ﴿١٩﴾
          </Text>
          <Text style={style.innerText}>
            Utusan-utusan itu berkata: "Kemalangan kamu adalah karena kamu sendiri. Apakah jika kamu diberi peringatan (kamu bernasib malang)? Sebenarnya kamu adalah kaum yang melampui batas".
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَجَاء مِنْ أَقْصَى الْمَدِينَةِ رَجُلٌ يَسْعَى قَالَ يَا قَوْمِ اتَّبِعُوا الْمُرْسَلِينَ ﴿٢٠﴾
          </Text>
          <Text style={style.innerText}>
            Dan datanglah dari ujung kota, seorang laki-laki dengan bergegas-gegas ia berkata: "Hai kaumku, ikutilah utusan-utusan itu".
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            اتَّبِعُوا مَن لاَّ يَسْأَلُكُمْ أَجْرًا وَهُم مُّهْتَدُونَ ﴿٢١﴾
          </Text>
          <Text style={style.innerText}>
            Ikutilah orang yang tiada minta balasan kepadamu; dan mereka adalah orang-orang yang mendapat petunjuk.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَمَا لِي لاَ أَعْبُدُ الَّذِي فَطَرَنِي وَإِلَيْهِ تُرْجَعُونَ ﴿٢٢﴾
          </Text>
          <Text style={style.innerText}>
            Mengapa aku tidak menyembah (Tuhan) yang telah menciptakanku dan yang hanya kepada-Nya-lah kamu (semua) akan dikembalikan? 
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            أَأَتَّخِذُ مِن دُونِهِ آلِهَةً إِن يُرِدْنِ الرَّحْمَن بِضُرٍّ لاَّ تُغْنِ عَنِّي شَفَاعَتُهُمْ شَيْئًا وَلاَ يُنقِذُونِ ﴿٢٣﴾
          </Text>
          <Text style={style.innerText}>
            Mengapa aku akan menyembah tuhan-tuhan selain-Nya jika (Allah) Yang Maha Pemurah menghendaki kemudharatan terhadapku, niscaya syafa'at mereka tidak memberi manfaat sedikitpun bagi diriku dan mereka tidak (pula) dapat menyelamatkanku?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            إِنِّي إِذًا لَّفِي ضَلاَلٍ مُّبِينٍ ﴿٢٤﴾
          </Text>
          <Text style={style.innerText}>
            Sesungguhnya aku kalau begitu pasti berada dalam kesesatan yang nyata.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            إِنِّي آمَنتُ بِرَبِّكُمْ فَاسْمَعُونِ ﴿٢٥﴾
          </Text>
          <Text style={style.innerText}>
            Sesungguhnya aku telah beriman kepada Tuhanmu; maka dengarkanlah (pengakuan keimanan)ku. 
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            قِيلَ ادْخُلِ الْجَنَّةَ قَالَ يَا لَيْتَ قَوْمِي يَعْلَمُونَ ﴿٢٦﴾
          </Text>
          <Text style={style.innerText}>
            Dikatakan (kepadanya): "Masuklah ke surga". Ia berkata: "Alangkah baiknya sekiranya kamumku mengetahui.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            بِمَا غَفَرَ لِي رَبِّي وَجَعَلَنِي مِنَ الْمُكْرَمِينَ ﴿٢٧﴾
          </Text>
          <Text style={style.innerText}>
            Apa yang menyebabkan Tuhanku memberi ampun kepadaku dan menjadikan aku termasuk orang-orang yang dimuliakan".
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَمَا أَنزَلْنَا عَلَى قَوْمِهِ مِن بَعْدِهِ مِنْ جُندٍ مِّنَ السَّمَاء وَمَا كُنَّا مُنزِلِينَ ﴿٢٨﴾
          </Text>
          <Text style={style.innerText}>
            Dan kami tidak menurunkan kepada kaumnya sesudah dia (meninggal) suatu pasukanpun dari langit dan tidak layak Kami menurunkannya. 
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            إِن كَانَتْ إِلاَّ صَيْحَةً وَاحِدَةً فَإِذَا هُمْ خَامِدُونَ ﴿٢٩﴾
          </Text>
          <Text style={style.innerText}>
            Tidak ada siksaan atas mereka melainkan satu teriakan suara saja; maka tiba-tiba mereka semuanya mati.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            يَا حَسْرَةً عَلَى الْعِبَادِ مَا يَأْتِيهِم مِّن رَّسُولٍ إِلاَّ كَانُوا بِهِ يَسْتَهْزِؤُون ﴿٣٠﴾
          </Text>
          <Text style={style.innerText}>
            Alangkah besarnya penyesalan terhadap hamba-hamba itu, tiada datang seorang rasulpun kepada mereka melainkan mereka selalu memperolok-olokkannya. 
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            أَلَمْ يَرَوْا كَمْ أَهْلَكْنَا قَبْلَهُم مِّنْ الْقُرُونِ أَنَّهُمْ إِلَيْهِمْ لاَ يَرْجِعُونَ ﴿٣١﴾
          </Text>
          <Text style={style.innerText}>
            Tidakkah mereka mengetahui berapa banyaknya umat-umat sebelum mereka yang telah Kami binasakan, bahwasanya orang-orang (yang telah Kami binasakan) itu tiada kembali kepada mereka.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَإِن كُلٌّ لَّمَّا جَمِيعٌ لَّدَيْنَا مُحْضَرُونَ ﴿٣٢﴾
          </Text>
          <Text style={style.innerText}>
            Dan setiap mereka semuanya akan dikumpulkan lagi kepada Kami.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَآيَةٌ لَّهُمُ الْأَرْضُ الْمَيْتَةُ أَحْيَيْنَاهَا وَأَخْرَجْنَا مِنْهَا حَبًّا فَمِنْهُ يَأْكُلُونَ ﴿٣٣﴾
          </Text>
          <Text style={style.innerText}>
            Dan suatu tanda (kekuasaan Allah yang besar) bagi mereka adalah bumi yang mati. Kami hidupkan bumi itu dan Kami keluarkan dari padanya biji-bijian, maka daripadanya mereka makan.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَجَعَلْنَا فِيهَا جَنَّاتٍ مِن نَّخِيلٍ وَأَعْنَابٍ وَفَجَّرْنَا فِيهَا مِنْ الْعُيُونِ ﴿٣٤﴾
          </Text>
          <Text style={style.innerText}>
            Dan Kami jadikan padanya kebun-kebun kurma dan anggur dan Kami pancarkan padanya beberapa mata air,
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            لِيَأْكُلُوا مِن ثَمَرِهِ وَمَا عَمِلَتْهُ أَيْدِيهِمْ أَفَلَا يَشْكُرُونَ ﴿٣٥﴾
          </Text>
          <Text style={style.innerText}>
            supaya mereka dapat makan dari buahnya, dan dari apa yang diusahakan oleh tangan mereka. Maka mengapakah mereka tidak bersyukur?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            سُبْحَانَ الَّذِي خَلَقَ الْأَزْوَاجَ كُلَّهَا مِمَّا تُنبِتُ الْأَرْضُ وَمِنْ أَنفُسِهِمْ وَمِمَّا لَا يَعْلَمُونَ ﴿٣٦﴾
          </Text>
          <Text style={style.innerText}>
            Maha Suci Tuhan yang telah menciptakan pasangan-pasangan semuanya, baik dari apa yang ditumbuhkan oleh bumi dan dari diri mereka maupun dari apa yang tidak mereka ketahui.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَآيَةٌ لَّهُمْ اللَّيْلُ نَسْلَخُ مِنْهُ النَّهَارَ فَإِذَا هُم مُّظْلِمُونَ ﴿٣٧﴾
          </Text>
          <Text style={style.innerText}>
            Dan suatu tanda (kekuasaan Allah yang besar) bagi mereka adalah malam; Kami tanggalkan siang dari malam itu, maka dengan serta merta mereka berada dalam kegelapan. 
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَالشَّمْسُ تَجْرِي لِمُسْتَقَرٍّ لَّهَا ذَلِكَ تَقْدِيرُ الْعَزِيزِ الْعَلِيمِ ﴿٣٨﴾
          </Text>
          <Text style={style.innerText}>
            dan matahari berjalan ditempat peredarannya. Demikianlah ketetapan Yang Maha Perkasa lagi Maha Mengetahui.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَالْقَمَرَ قَدَّرْنَاهُ مَنَازِلَ حَتَّى عَادَ كَالْعُرْجُونِ الْقَدِيمِ ﴿٣٩﴾
          </Text>
          <Text style={style.innerText}>
            Dan telah Kami tetapkan bagi bulan manzilah-manzilah, sehingga (setelah dia sampai ke manzilah yang terakhir) kembalilah dia sebagai bentuk tandan yang tua.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            لَا الشَّمْسُ يَنبَغِي لَهَا أَن تُدْرِكَ الْقَمَرَ وَلَا اللَّيْلُ سَابِقُ النَّهَارِ وَكُلٌّ فِي فَلَكٍ يَسْبَحُونَ ﴿٤٠﴾
          </Text>
          <Text style={style.innerText}>
            Tidaklah mungkin bagi matahari mendapatkan bulan dan malampun tidak dapat mendahului siang. Dan masing-masing beredar pada garis edarnya.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَآيَةٌ لَّهُمْ أَنَّا حَمَلْنَا ذُرِّيَّتَهُمْ فِي الْفُلْكِ الْمَشْحُونِ ﴿٤١﴾
          </Text>
          <Text style={style.innerText}>
            Dan suatu tanda (kebesaran Allah yang besar) bagi mereka adalah bahwa Kami angkut keturunan mereka dalam bahtera yang penuh muatan.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَخَلَقْنَا لَهُم مِّن مِّثْلِهِ مَا يَرْكَبُونَ ﴿٤٢﴾
          </Text>
          <Text style={style.innerText}>
            dan Kami ciptakan untuk mereka yang akan mereka kendarai seperti bahtera itu.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَإِن نَّشَأْ نُغْرِقْهُمْ فَلَا صَرِيخَ لَهُمْ وَلَا هُمْ يُنقَذُونَ ﴿٤٣﴾
          </Text>
          <Text style={style.innerText}>
            Dan jika Kami menghendaki niscaya Kami tenggelamkan mereka, maka tiadalah bagi mereka penolong dan tidak pula mereka diselamatkan.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            إِلَّا رَحْمَةً مِّنَّا وَمَتَاعًا إِلَى حِينٍ ﴿٤٤﴾
          </Text>
          <Text style={style.innerText}>
            Tetapi (Kami selamatkan mereka) karena rahmat yang besar dari Kami dan untuk memberikan kesenangan hidup sampai kepada suatu ketika.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَإِذَا قِيلَ لَهُمُ اتَّقُوا مَا بَيْنَ أَيْدِيكُمْ وَمَا خَلْفَكُمْ لَعَلَّكُمْ تُرْحَمُونَ ﴿٤٥﴾
          </Text>
          <Text style={style.innerText}>
            Dan apabila dikatakan kepada mereka: "Takutlah kamu akan siksa yang dihadapanmu dan siksa yang akan datang supaya kamu mendapat rahmat", (niscaya mereka berpaling). 
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَمَا تَأْتِيهِم مِّنْ آيَةٍ مِّنْ آيَاتِ رَبِّهِمْ إِلَّا كَانُوا عَنْهَا مُعْرِضِينَ ﴿٤٦﴾
          </Text>
          <Text style={style.innerText}>
            Dan sekali-kali tiada datang kepada mereka suatu tanda dari tanda tanda kekuasaan Tuhan mereka, melainkan mereka selalu berpaling daripadanya.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَإِذَا قِيلَ لَهُمْ أَنفِقُوا مِمَّا رَزَقَكُمْ اللَّهُ قَالَ الَّذِينَ كَفَرُوا لِلَّذِينَ آمَنُوا أَنُطْعِمُ مَن لَّوْ يَشَاء اللَّهُ أَطْعَمَهُ إِنْ أَنتُمْ إِلَّا فِي ضَلَالٍ مُّبِينٍ ﴿٤٧﴾
          </Text>
          <Text style={style.innerText}>
            Dan apabila dikatakakan kepada mereka: "Nafkahkanlah sebahagian dari reski yang diberikan Allah kepadamu", maka orang-orang yang kafir itu berkata kepada orang-orang yang beriman: "Apakah kami akan memberi makan kepada orang-orang yang jika Allah menghendaki tentulah Dia akan memberinya makan, tiadalah kamu melainkan dalam kesesatan yang nyata".
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَيَقُولُونَ مَتَى هَذَا الْوَعْدُ إِن كُنتُمْ صَادِقِينَ ﴿٤٨﴾
          </Text>
          <Text style={style.innerText}>
            Dan mereka berkata: "Bilakah (terjadinya) janji ini (hari berbangkit) jika kamu adalah orang-orang yang benar?".
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            مَا يَنظُرُونَ إِلَّا صَيْحَةً وَاحِدَةً تَأْخُذُهُمْ وَهُمْ يَخِصِّمُونَ ﴿٤٩﴾
          </Text>
          <Text style={style.innerText}>
            Mereka tidak menunggu melainkan satu teriakan saja yang akan membinasakan mereka ketika mereka sedang bertengkar.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَلَا يَسْتَطِيعُونَ تَوْصِيَةً وَلَا إِلَى أَهْلِهِمْ يَرْجِعُونَ ﴿٥٠﴾
          </Text>
          <Text style={style.innerText}>
            lalu mereka tidak kuasa membuat suatu wasiatpun dan tidak (pula) dapat kembali kepada keluarganya.
          </Text>
        </View><View style={style.contentA}>
          <Text style={style.arab}>
            وَنُفِخَ فِي الصُّورِ فَإِذَا هُم مِّنَ الْأَجْدَاثِ إِلَى رَبِّهِمْ يَنسِلُونَ ﴿٥١﴾
          </Text>
          <Text style={style.innerText}>
            Dan ditiuplah sangkalala, maka tiba-tiba mereka keluar dengan segera dari kuburnya (menuju) kepada Tuhan mereka.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            قَالُوا يَا وَيْلَنَا مَن بَعَثَنَا مِن مَّرْقَدِنَا هَذَا مَا وَعَدَ الرَّحْمَنُ وَصَدَقَ الْمُرْسَلُونَ ﴿٥٢﴾
          </Text>
          <Text style={style.innerText}>
            Mereka berkata: "Aduhai celakalah kami! Siapakah yang membangkitkan kami dari tempat-tidur kami (kubur)?". Inilah yang dijanjikan (Tuhan) Yang Maha Pemurah dan benarlah Rasul-rasul(Nya).
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            إِن كَانَتْ إِلَّا صَيْحَةً وَاحِدَةً فَإِذَا هُمْ جَمِيعٌ لَّدَيْنَا مُحْضَرُونَ ﴿٥٣﴾
          </Text>
          <Text style={style.innerText}>
            Tidak adalah teriakan itu selain sekali teriakan saja, maka tiba-tiba mereka semua dikumpulkan kepada Kami. 
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَالْيَوْمَ لَا تُظْلَمُ نَفْسٌ شَيْئًا وَلَا تُجْزَوْنَ إِلَّا مَا كُنتُمْ تَعْمَلُونَ ﴿٥٤﴾
          </Text>
          <Text style={style.innerText}>
            Maka pada hari itu seseorang tidak akan dirugikan sedikitpun dan kamu tidak dibalasi, kecuali dengan apa yang telah kamu kerjakan.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            إِنَّ أَصْحَابَ الْجَنَّةِ الْيَوْمَ فِي شُغُلٍ فَاكِهُونَ ﴿٥٥﴾
          </Text>
          <Text style={style.innerText}>
            Sesungguhnya penghuni surga pada hari itu bersenang-senang dalam kesibukan (mereka).
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            هُمْ وَأَزْوَاجُهُمْ فِي ظِلَالٍ عَلَى الْأَرَائِكِ مُتَّكِؤُونَ ﴿٥٦﴾
          </Text>
          <Text style={style.innerText}>
            Mereka dan isteri-isteri mereka berada dalam tempat yang teduh, bertelekan di atas dipan-dipan.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            لَهُمْ فِيهَا فَاكِهَةٌ وَلَهُم مَّا يَدَّعُونَ ﴿٥٧﴾
          </Text>
          <Text style={style.innerText}>
            Di surga itu mereka memperoleh buah-buahan dan memperoleh apa yang mereka minta. 
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            سَلَامٌ قَوْلًا مِن رَّبٍّ رَّحِيمٍ ﴿٥٨﴾
          </Text>
          <Text style={style.innerText}>
            (Kepada mereka dikatakan): "Salam", sebagai ucapan selamat dari Tuhan Yang Maha Penyayang.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَامْتَازُوا الْيَوْمَ أَيُّهَا الْمُجْرِمُونَ ﴿٥٩﴾
          </Text>
          <Text style={style.innerText}>
            Dan (dikatakan kepada orang-orang kafir): "Berpisahlah kamu (dari orang-orang mukmin) pada hari ini, hai orang-orang yang berbuat jahat.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            أَلَمْ أَعْهَدْ إِلَيْكُمْ يَا بَنِي آدَمَ أَن لَّا تَعْبُدُوا الشَّيْطَانَ إِنَّهُ لَكُمْ عَدُوٌّ مُّبِينٌ ﴿٦٠﴾
          </Text>
          <Text style={style.innerText}>
            Bukankah Aku telah memerintahkan kepadamu hai Bani Adam supaya kamu tidak menyembah syaitan? Sesungguhnya syaitan itu adalah musuh yang nyata bagi kamu",
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَأَنْ اعْبُدُونِي هَذَا صِرَاطٌ مُّسْتَقِيمٌ ﴿٦١﴾
          </Text>
          <Text style={style.innerText}>
            dan hendaklah kamu menyembah-Ku. Inilah jalan yang lurus. 
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَلَقَدْ أَضَلَّ مِنكُمْ جِبِلًّا كَثِيرًا أَفَلَمْ تَكُونُوا تَعْقِلُونَ ﴿٦٢﴾
          </Text>
          <Text style={style.innerText}>
            Sesungguhnya syaitan itu telah menyesatkan sebahagian besar diantaramu, Maka apakah kamu tidak memikirkan?.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            هَذِهِ جَهَنَّمُ الَّتِي كُنتُمْ تُوعَدُونَ ﴿٦٣﴾
          </Text>
          <Text style={style.innerText}>
            Inilah Jahannam yang dahulu kamu diancam (dengannya).
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            اصْلَوْهَا الْيَوْمَ بِمَا كُنتُمْ تَكْفُرُونَ ﴿٦٤﴾
          </Text>
          <Text style={style.innerText}>
            Masuklah ke dalamnya pada hari ini disebabkan kamu dahulu mengingkarinya.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            الْيَوْمَ نَخْتِمُ عَلَى أَفْوَاهِهِمْ وَتُكَلِّمُنَا أَيْدِيهِمْ وَتَشْهَدُ أَرْجُلُهُمْ بِمَا كَانُوا يَكْسِبُونَ ﴿٦٥﴾
          </Text>
          <Text style={style.innerText}>
            Pada hari ini Kami tutup mulut mereka; dan berkatalah kepada Kami tangan mereka dan memberi kesaksianlah kaki mereka terhadap apa yang dahulu mereka usahakan.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَلَوْ نَشَاء لَطَمَسْنَا عَلَى أَعْيُنِهِمْ فَاسْتَبَقُوا الصِّرَاطَ فَأَنَّى يُبْصِرُونَ ﴿٦٦﴾
          </Text>
          <Text style={style.innerText}>
            Dan jikalau Kami menghendaki pastilah Kami hapuskan penglihatan mata mereka; lalu mereka berlomba-lomba (mencari) jalan, Maka betapakah mereka dapat melihat(nya).
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَلَوْ نَشَاء لَمَسَخْنَاهُمْ عَلَى مَكَانَتِهِمْ فَمَا اسْتَطَاعُوا مُضِيًّا وَلَا يَرْجِعُونَ ﴿٦٧﴾
          </Text>
          <Text style={style.innerText}>
            Dan jikalau Kami menghendaki pastilah Kami ubah mereka di tempat mereka berada; maka mereka tidak sanggup berjalan lagi dan tidak (pula) sanggup kembali.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَمَنْ نُعَمِّرْهُ نُنَكِّسْهُ فِي الْخَلْقِ أَفَلَا يَعْقِلُونَ ﴿٦٨﴾
          </Text>
          <Text style={style.innerText}>
            Dan barangsiapa yang Kami panjangkan umurnya niscaya Kami kembalikan dia kepada kejadian(nya). Maka apakah mereka tidak memikirkan?
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَمَا عَلَّمْنَاهُ الشِّعْرَ وَمَا يَنبَغِي لَهُ إِنْ هُوَ إِلَّا ذِكْرٌ وَقُرْآنٌ مُّبِينٌ ﴿٦٩﴾
          </Text>
          <Text style={style.innerText}>
            Dan Kami tidak mengajarkan syair kepadanya (Muhammad) dan bersyair itu tidaklah layak baginya. Al Quran itu tidak lain hanyalah pelajaran dan kitab yang memberi penerangan.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            لِيُنذِرَ مَن كَانَ حَيًّا وَيَحِقَّ الْقَوْلُ عَلَى الْكَافِرِينَ ﴿٧٠﴾
          </Text>
          <Text style={style.innerText}>
            supaya dia (Muhammad) memberi peringatan kepada orang-orang yang hidup (hatinya) dan supaya pastilah (ketetapan azab) terhadap orang-orang kafir.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            أَوَلَمْ يَرَوْا أَنَّا خَلَقْنَا لَهُمْ مِمَّا عَمِلَتْ أَيْدِينَا أَنْعَامًا فَهُمْ لَهَا مَالِكُونَ ﴿٧١﴾
          </Text>
          <Text style={style.innerText}>
            Dan apakah mereka tidak melihat bahwa sesungguhnya Kami telah menciptakan binatang ternak untuk mereka yaitu sebahagian dari apa yang telah Kami ciptakan dengan kekuasaan Kami sendiri, lalu mereka menguasainya?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَذَلَّلْنَاهَا لَهُمْ فَمِنْهَا رَكُوبُهُمْ وَمِنْهَا يَأْكُلُونَ ﴿٧٢﴾
          </Text>
          <Text style={style.innerText}>
            Dan Kami tundukkan binatang-binatang itu untuk mereka; maka sebahagiannya menjadi tunggangan mereka dan sebahagiannya mereka makan. 
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَلَهُمْ فِيهَا مَنَافِعُ وَمَشَارِبُ أَفَلَا يَشْكُرُونَ ﴿٧٣﴾
          </Text>
          <Text style={style.innerText}>
            Dan mereka memperoleh padanya manfaat-manfaat dan minuman. Maka mengapakah mereka tidak bersyukur?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَاتَّخَذُوا مِن دُونِ اللَّهِ آلِهَةً لَعَلَّهُمْ يُنصَرُونَ ﴿٧٤﴾
          </Text>
          <Text style={style.innerText}>
            Mereka mengambil sembahan-sembahan selain Allah, agar mereka mendapat pertolongan.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            لَا يَسْتَطِيعُونَ نَصْرَهُمْ وَهُمْ لَهُمْ جُندٌ مُّحْضَرُونَ ﴿٧٥﴾
          </Text>
          <Text style={style.innerText}>
            Berhala-berhala itu tiada dapat menolong mereka; padahal berhala-berhala itu menjadi tentara yang disiapkan untuk menjaga mereka.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَلَا يَحْزُنكَ قَوْلُهُمْ إِنَّا نَعْلَمُ مَا يُسِرُّونَ وَمَا يُعْلِنُونَ ﴿٧٦﴾
          </Text>
          <Text style={style.innerText}>
            Maka janganlah ucapan mereka menyedihkan kamu. Sesungguhnya Kami mengetahui apa yang mereka rahasiakan dan apa yang mereka nyatakan.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            أَوَلَمْ يَرَ الْإِنسَانُ أَنَّا خَلَقْنَاهُ مِن نُّطْفَةٍ فَإِذَا هُوَ خَصِيمٌ مُّبِينٌ ﴿٧٧﴾
          </Text>
          <Text style={style.innerText}>
            Dan apakah manusia tidak memperhatikan bahwa Kami menciptakannya dari setitik air (mani), maka tiba-tiba ia menjadi penantang yang nyata! 
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَضَرَبَ لَنَا مَثَلًا وَنَسِيَ خَلْقَهُ قَالَ مَنْ يُحْيِي الْعِظَامَ وَهِيَ رَمِيمٌ ﴿٧٨﴾
          </Text>
          <Text style={style.innerText}>
            Dan ia membuat perumpamaan bagi Kami; dan dia lupa kepada kejadiannya; ia berkata: "Siapakah yang dapat menghidupkan tulang belulang, yang telah hancur luluh?"
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            قُلْ يُحْيِيهَا الَّذِي أَنشَأَهَا أَوَّلَ مَرَّةٍ وَهُوَ بِكُلِّ خَلْقٍ عَلِيمٌ ﴿٧٩﴾
          </Text>
          <Text style={style.innerText}>
            Katakanlah: "Ia akan dihidupkan oleh Tuhan yang menciptakannya kali yang pertama. Dan Dia Maha Mengetahui tentang segala makhluk.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            الَّذِي جَعَلَ لَكُم مِّنَ الشَّجَرِ الْأَخْضَرِ نَارًا فَإِذَا أَنتُم مِّنْهُ تُوقِدُونَ ﴿٨٠﴾
          </Text>
          <Text style={style.innerText}>
            yaitu Tuhan yang menjadikan untukmu api dari kayu yang hijau, maka tiba-tiba kamu nyalakan (api) dari kayu itu".
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            أَوَلَيْسَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِقَادِرٍ عَلَى أَنْ يَخْلُقَ مِثْلَهُم بَلَى وَهُوَ الْخَلَّاقُ الْعَلِيمُ ﴿٨١﴾
          </Text>
          <Text style={style.innerText}>
            Dan tidaklah Tuhan yang menciptakan langit dan bumi itu berkuasa menciptakan yang serupa dengan itu? Benar, Dia berkuasa. Dan Dialah Maha Pencipta lagi Maha Mengetahui.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا أَنْ يَقُولَ لَهُ كُنْ فَيَكُونُ ﴿٨٢﴾
          </Text>
          <Text style={style.innerText}>
            Sesungguhnya keadaan-Nya apabila Dia menghendaki sesuatu hanyalah berkata kepadanya: "Jadilah!" maka terjadilah ia.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَسُبْحَانَ الَّذِي بِيَدِهِ مَلَكُوتُ كُلِّ شَيْءٍ وَإِلَيْهِ تُرْجَعُونَ ﴿٨٣﴾
          </Text>
          <Text style={style.innerText}>
            Maka Maha Suci (Allah) yang di tangan-Nya kekuasaaan atas segala sesuatu dan kepada-Nya-lah kamu dikembalikan.
          </Text>
        </View>
      </Content>
      </ScrollView>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 3,
    width: Dimensions.get('window').width,
    backgroundColor: '#FFF',
  },
  wrepper:{
    paddingBottom: 20,
  },
  bismillah:{
    backgroundColor: '#D3EDEF',
    padding: 15,
  },
  innerBismillah:{
    textAlign: 'center',
    fontSize: 21,
  },
  contentA:{
    paddingLeft: 20,
    paddingRight: 20,
  },
  contentB:{
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#E5F8F9'
  },
  arab:{
    fontSize: 21,
    marginBottom: 10,
    marginTop: 20,
  },
  innerText:{
    marginBottom: 20,
    marginTop: 10,
    fontSize: 14,
    color: '#262626',
  },
})
