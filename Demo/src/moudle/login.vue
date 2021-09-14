<template>
	<div>
		<el-form  ref="editForm" :model="editForm" :rules="rules" label-width="80px" class="loginContainer">
			<h3 class="lgoinTitle">系统登录</h3>
			<el-form-item id="username" prop="editForm.username">
				<el-input type="text" prefix-icon="el-icon-user" v-model="editForm.username" placeholder="用户名"></el-input>
			</el-form-item>
			<el-form-item id="password">
				<el-input type="password" prefix-icon="el-icon-lock" v-model="editForm.password" placeholder="密码" ></el-input>
			</el-form-item>
			<el-form-item id="code">
				<div>
					<el-input type="text" prefix-icon="" v-model="editForm.code" placeholder="验证码"></el-input>
					<div class="block">
						<el-image :src="captchaUrl"></el-image>
					</div>
					<el-checkbox v-model="rememberMe" class="remember">记住密码</el-checkbox>
				</div>
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
		data:function(){
			return {
				editForm:{
					username: "",
					password: "",
					code: "",
				},
				rememberMe: true,
				captchaUrl: '',
				rules: {
					username:[
						{ required: true, message: '请输入用户名', trigger: 'blur' },
					]
				}
			}
		},
		methods:{
			login(){
				this.$axios({
					method: 'post',
					url: '',
					data: this.editForm
				}).then((res)=>{
					
				}).catch((error)=>{
					this.$message.error(error);
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
	#code {
		width: 250px;
		margin-right: 5px;
	}
	#remember {
		text-align: left;
		margin: 0px 0px 15px 0px;
	}
</style>
