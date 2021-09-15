<template>
	<div>
		<el-form  ref="editForm" :model="editForm" :rules="rules" label-width="80px" class="loginContainer">
			<h3 class="lgoinTitle">系统登录</h3>
			<el-form-item prop="username">
				<el-input type="text" prefix-icon="el-icon-user" v-model="editForm.username" placeholder="用户名"></el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input type="password" prefix-icon="el-icon-lock" v-model="editForm.password" placeholder="密码" ></el-input>
			</el-form-item>
			<el-form-item prop="code" id="myCode">
				<el-input type="text" prefix-icon="" v-model="editForm.code" placeholder="验证码"></el-input>
				<img :src="captchaUrl" @click="updateCaptcha"></img>
			</el-form-item>
			<el-form-item>
				<el-checkbox v-model="rememberMe" class="remember">记住密码</el-checkbox><br>
			</el-form-item>	
			<el-form-item id="button">

				<el-button type="primary" @click="login()" >确认</el-button>
				<el-button @click="cancle()">取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default{
		name:"login",
		data:function(){
			return {
				editForm:{
					username: "",
					password: "",
					code: "",
				},
				rememberMe: true,
				captchaUrl: '/captcha?time='+new Date(),
				rules: {
					username:[
						{ required: true, message: '请输入用户名', trigger: 'blur' },
					],
					password:[
						{ required: true, message: '请输入密码',trigger: 'blur'},
					],
					code:[
						{ required: true, message: '请输入验证码',trigger: 'blur'},
					],
					
				}
			}
		},
		methods:{
			updateCaptcha(){
				this.captchaUrl='/captcha?time='+new Date();
			},
			login(){
				let that = this;
				that.$refs.editForm.validate((valid)=>{
					debugger;
					if(valid){
						//校验成功
						that.$axios({
							method: 'post',
							url: '',
							data: that.editForm
						}).then((res)=>{
							
						}).catch((error)=>{
							that.$message.error(error);
						})
					}else{
						that.$message.error("请检查必填项！");
						return;
					}
				})
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	.loginContainer {
		border-radius: 15px;
		background-clip: padding-box;
		margin: 180px auto;
		width: 350px;
		padding: 15px 35px 15px 35px;
		background: #fff;
		border: 1px solid #EAEAEA;
		box-shadow:  0 0 25px #cac6c6;
	}
	.lgoinTitle {
		margin: 0px auto 40px auto;
		text-align: center;
	}
	#myCode {
		width: 250px;
		margin-right: 5px;
	}
	#remember {
		text-align: left;
		margin: 0px 0px 15px 0px;
	}
	.el-form-item__content {
		display: flex;
		align-items: center;
	}
</style>
