<template lang="html">
  <b-card no-body :class="showCollapse ? 'active' : null">
    <b-card-header header-tag="header" role="tab">
      <a href="#"
        @click="showCollapse = true"
        :class="showCollapse ? 'collapsed' : null"
        aria-controls="OrderQueueLocalization"
        :aria-expanded="showCollapse ? 'true' : 'false'">Localization</a>
    </b-card-header>
    <b-collapse id="OrderQueueLocalization" v-model="showCollapse" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <div class="row mb-4">
          <div class="col">
            <label for="language">Language</label>
            <select id="language" class="form-control">
              <option selected>Select Language&hellip;</option>
              <option value="0" label="Albanian">Albanian</option>
              <option value="1" label="Arabic">Arabic</option>
              <option value="2" label="Arabic/French">Arabic/French</option>
              <option value="3" label="Bengali">Bengali</option>
              <option value="4" label="Bhojpuri">Bhojpuri</option>
              <option value="5" label="Bosnian">Bosnian</option>
              <option value="6" label="Bulgarian">Bulgarian</option>
              <option value="7" label="Cantonese">Cantonese</option>
              <option value="8" label="Catalan">Catalan</option>
              <option value="9" label="Croatian">Croatian</option>
              <option value="10" label="Czech">Czech</option>
              <option value="11" label="Danish">Danish</option>
              <option value="12" label="Dutch">Dutch</option>
              <option value="13" label="English">English</option>
              <option value="14" label="Estonian">Estonian</option>
              <option value="15" label="Estonian/Russian">Estonian/Russian</option>
              <option value="16" label="Finnish">Finnish</option>
              <option value="17" label="Flemish">Flemish</option>
              <option value="18" label="French-Canadian">French-Canadian</option>
              <option value="19" label="French-Parisian">French-Parisian</option>
              <option value="20" label="French/Flemish">French/Flemish</option>
              <option value="21" label="Gaelic">Gaelic</option>
              <option value="22" label="German">German</option>
              <option value="23" label="German/French">German/French</option>
              <option value="24" label="Greek">Greek</option>
              <option value="25" label="Gujarati">Gujarati</option>
              <option value="26" label="Hebrew">Hebrew</option>
              <option value="27" label="Hindi">Hindi</option>
              <option value="28" label="Hungarian">Hungarian</option>
              <option value="29" label="Icelandic">Icelandic</option>
              <option value="30" label="Indonesian">Indonesian</option>
              <option value="31" label="Italian">Italian</option>
              <option value="32" label="Japanese">Japanese</option>
              <option value="33" label="Kannada">Kannada</option>
              <option value="34" label="Khmer">Khmer</option>
              <option value="35" label="Korean">Korean</option>
              <option value="36" label="Latin American Spanish">Latin American Spanish</option>
              <option value="37" label="Latvian">Latvian</option>
              <option value="38" label="Latvian/Russian">Latvian/Russian</option>
              <option value="39" label="Lithuania">Lithuania</option>
              <option value="40" label="Macedonian">Macedonian</option>
              <option value="41" label="Malayalam">Malayalam</option>
              <option value="42" label="Malaysia">Malaysia</option>
              <option value="43" label="Mandarin">Mandarin</option>
              <option value="44" label="Mandarin-PRC">Mandarin-PRC</option>
              <option value="45" label="Marathi">Marathi</option>
              <option value="46" label="Mongolian">Mongolian</option>
              <option value="47" label="Norwegian">Norwegian</option>
              <option value="48" label="Polish">Polish</option>
              <option value="49" label="Portuguese">Portuguese</option>
              <option value="50" label="Portuguese-Brazilian">Portuguese-Brazilian</option>
              <option value="51" label="Punjabi">Punjabi</option>
              <option value="52" label="Romania">Romania</option>
              <option value="53" label="Russian">Russian</option>
              <option value="54" label="Serbian">Serbian</option>
              <option value="55" label="Slovak">Slovak</option>
              <option value="56" label="Slovene">Slovene</option>
              <option value="57" label="Spanish-Castilian">Spanish-Castilian</option>
              <option value="58" label="Swedish">Swedish</option>
              <option value="59" label="Tamil">Tamil</option>
              <option value="60" label="Telugu">Telugu</option>
              <option value="61" label="Thai">Thai</option>
              <option value="62" label="Turkish">Turkish</option>
              <option value="63" label="Ukrainian">Ukrainian</option>
              <option value="64" label="Vietnamese">Vietnamese</option>
              <option value="65" label="Welsh">Welsh</option>
            </select>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <label for="">Territory</label>
            <select class="form-control">
              <option selected>Select Territory&hellip;</option>
              <option value="0" label="Albania">Albania</option>
              <option value="1" label="All Countries">All Countries</option>
              <option value="2" label="Argentina">Argentina</option>
              <option value="3" label="Australia">Australia</option>
              <option value="4" label="Austria">Austria</option>
              <option value="5" label="Bangladesh">Bangladesh</option>
              <option value="6" label="Belgium">Belgium</option>
              <option value="7" label="Bolivia">Bolivia</option>
              <option value="8" label="Bosnia">Bosnia</option>
              <option value="9" label="Brazil">Brazil</option>
              <option value="10" label="Bulgaria">Bulgaria</option>
              <option value="11" label="Cambodia">Cambodia</option>
              <option value="12" label="Canada">Canada</option>
              <option value="13" label="Chile">Chile</option>
              <option value="14" label="China">China</option>
              <option value="15" label="Colombia">Colombia</option>
              <option value="16" label="Croatia">Croatia</option>
              <option value="17" label="Cyprus">Cyprus</option>
              <option value="18" label="Czech Republic">Czech Republic</option>
              <option value="19" label="Denmark">Denmark</option>
              <option value="20" label="Dominican Republic">Dominican Republic</option>
              <option value="21" label="Ecuador">Ecuador</option>
              <option value="22" label="Egypt">Egypt</option>
              <option value="23" label="Egypt">Egypt</option>
              <option value="24" label="Estonia">Estonia</option>
              <option value="25" label="Europe Regional">Europe Regional</option>
              <option value="26" label="Finland">Finland</option>
              <option value="27" label="France">France</option>
              <option value="28" label="Germany">Germany</option>
              <option value="29" label="Greece">Greece</option>
              <option value="30" label="Head Office">Head Office</option>
              <option value="31" label="Hong Kong">Hong Kong</option>
              <option value="32" label="Hungary">Hungary</option>
              <option value="33" label="Iceland">Iceland</option>
              <option value="34" label="India">India</option>
              <option value="35" label="Indonesia">Indonesia</option>
              <option value="36" label="Ireland">Ireland</option>
              <option value="37" label="Israel">Israel</option>
              <option value="38" label="Italy">Italy</option>
              <option value="39" label="Japan">Japan</option>
              <option value="40" label="Kenya">Kenya</option>
              <option value="41" label="Korea">Korea</option>
              <option value="42" label="Latam Regional">Latam Regional</option>
              <option value="43" label="Latvia">Latvia</option>
              <option value="44" label="Lebanon">Lebanon</option>
              <option value="45" label="Lithuania">Lithuania</option>
              <option value="46" label="Macedonia">Macedonia</option>
              <option value="47" label="Malaysia">Malaysia</option>
              <option value="48" label="Maldives">Maldives</option>
              <option value="49" label="Mexico">Mexico</option>
              <option value="50" label="Mid East Regional">Mid East Regional</option>
              <option value="51" label="Mongolia">Mongolia</option>
              <option value="52" label="Nepal">Nepal</option>
              <option value="53" label="Netherlands">Netherlands</option>
              <option value="54" label="New Zealand">New Zealand</option>
              <option value="55" label="Nigeria">Nigeria</option>
              <option value="56" label="Norway">Norway</option>
              <option value="57" label="Pakistan">Pakistan</option>
              <option value="58" label="Panama">Panama</option>
              <option value="59" label="Paraguay">Paraguay</option>
              <option value="60" label="Peru">Peru</option>
              <option value="61" label="Philippines">Philippines</option>
              <option value="62" label="Poland">Poland</option>
              <option value="63" label="Portugal">Portugal</option>
              <option value="64" label="Romania">Romania</option>
              <option value="65" label="Russia">Russia</option>
              <option value="66" label="SAARC Regional">SAARC Regional</option>
              <option value="67" label="Serbia">Serbia</option>
              <option value="68" label="Singapore">Singapore</option>
              <option value="69" label="Slovakia">Slovakia</option>
              <option value="70" label="Slovenia">Slovenia</option>
              <option value="71" label="South Africa">South Africa</option>
              <option value="72" label="South East Asia">South East Asia</option>
              <option value="73" label="Spain">Spain</option>
              <option value="74" label="Sri Lanka">Sri Lanka</option>
              <option value="75" label="Sweden">Sweden</option>
              <option value="76" label="Switzerland">Switzerland</option>
              <option value="77" label="Taiwan">Taiwan</option>
              <option value="78" label="Thailand">Thailand</option>
              <option value="79" label="Trinidad">Trinidad</option>
              <option value="80" label="Turkey">Turkey</option>
              <option value="81" label="Ukraine">Ukraine</option>
              <option value="82" label="United Arabic Emirates">United Arabic Emirates</option>
              <option value="83" label="United Kingdom">United Kingdom</option>
              <option value="84" label="United States">United States</option>
              <option value="85" label="Uruguay">Uruguay</option>
              <option value="86" label="Venezuela">Venezuela</option>
              <option value="87" label="Vietnam">Vietnam</option>
              <option value="88" label="Worldwide">Worldwide</option>
            </select>
          </div>
        </div>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: 'OrderQueueLocalization',
  data () {
    return {
      showCollapse: false
    }
  }
}
</script>

<style lang="scss">
</style>
