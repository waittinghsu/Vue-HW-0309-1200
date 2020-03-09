<template lang="pug">
  b-container(fluid)
    .d-flex.flex-column.py-3
      .h3.cyan--text Choose Account Type
    el-row(type="flex", justify="center", :gutter="16")
        el-col.position-relative(v-for="(item, key) in img", :key="`card-column-${key}`", :xs="{span: 12, offset: 0}", :sm="{span: 8, offset: 0}", :md="{span: 8, offset: 0}", :lg="{span: 4, offset: 0}")
          Card(:image="item.image", :name="item.name", :active="item.active", @click.native="cardClick(item)")
          .position-absolute(v-if="item.active", style="bottom:0;right:0;")
            el-button.cyan--bg(circle)
    el-row
      el-col(:span="24", :sm="{span: 18, offset: 3}", :lg="{span: 12, offset: 6}")
        el-row
          el-col.py-3(:span="24")
            span.grey--text.text-darken-1 Hello {{ select }}
            p.grey--text.text-darken-1 Please fill out the gorm below to get started
          el-col(:span="24")
            el-form(:model="ruleForm", :rules="rules", ref="ruleForm")
              el-form-item(prop="account")
                el-input.py-3(v-model="ruleForm.account" prefix-icon="el-icon-search")
              el-form-item(prop="pwd")
                el-input.py-3(type="password" v-model="ruleForm.pwd" prefix-icon="el-icon-search") 
          el-col.text-left(:span="12")
            span.grey--text.text-darken-2 No account?
            a.cyan--text.pl-2 Signup
          el-col.text-right(:span="12")
            el-button(@click="submit" type="primary") login
</template>

<script>
import _ from "lodash";
import Card from "../components/Card";
export default {
  name: "Login",
  components: {
    Card
  },
  props: {
    msg: String
  },
  data() {
    var validatePass2 = (rule, value, callback) => {
      let inputStatus = true;
      for (let i = 0; i <= this.ruleForm.pwd.length - 6; i++) {
        const matchString = this.ruleForm.pwd.substr(i, 6);
        if (this.ruleForm.account.indexOf(matchString) !== -1) {
          inputStatus = false;
        }
      }
      if (value === "") {
        callback(new Error("請再次輸入密碼"));
      } else if (!inputStatus) {
        callback(
          new Error("密碼的任意連續 6 碼，不可以和帳號的任意連續 6 碼重複!")
        );
      } else {
        callback();
      }
    };
    return {
      img: [
        {
          name: "doctor",
          image: "/img/doctor.svg",
          active: false
        },
        {
          name: "patient",
          image: "/img/patient.svg",
          active: false
        }
      ],
      ruleForm: {
        account: "qetuoljgd@hotamil.com",
        pwd: "wwwwtuoljgwwww"
      },
      rules: {
        account: [
          {
            required: true,
            type: "email",
            message: "請輸入帳號",
            trigger: "blur"
          }
        ],
        pwd: [{ validator: validatePass2, required: true, trigger: "blur" }]
      }
    };
  },
  computed: {
    select() {
      const select = _.find(this.img, o => o.active);
      return select ? select.name : "?????";
    }
  },
  methods: {
    submit() {
      //let inputStatus = true;
      /* for (let i = 0; i <= this.ruleForm.pwd.length - 6; i++) {
        const matchString = this.ruleForm.pwd.substr(i, 6);
        if (this.ruleForm.account.indexOf(matchString) !== -1) {
          inputStatus = false;
        }
        console.log(matchString, inputStatus);
      }*/
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    cardClick(item) {
      _.map(this.img, o => {
        o.active = o.name === item.name;
      });
    }
  }
};
</script>

