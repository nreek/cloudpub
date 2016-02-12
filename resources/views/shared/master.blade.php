@if(!Request::ajax())
<html>
<head>
	<title>CloudPub</title>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<meta name="viewport" content="user-scalable=0, initial-scale=1, width=device-width">
	<link rel="stylesheet" href="/src/css/plugins.css"/>
	<link rel="stylesheet" href="/src/css/style.css"/>
</head>
<body>
	<nav>
		<div class="column large-3" id="logo">
			<h1>CloudPub</h1>
		</div>
		<div class="column show-for-large-up large-3" id="search">
			<div class="row collapse">
				<div class="large-11 columns">
					<input type="text" placeholder="encontre livros, autores e amigos">
				</div>
				<div class="large-1 columns">
					<a href="#" class="button postfix">
						<span data-dropdown="drop"><i class="fa fa-caret-down"></i></span>
						<i class="fa fa-search"></i>
					</a>
					<ul id="drop" class="f-dropdown" data-dropdown-content>
						<li><a href="#"><i class="fa fa-book"></i> Livro</a></li>
						<li><a href="#"><i class="fa fa-pencil"></i> Autor</a></li>
						<li><a href="#"><i class="fa fa-user"></i> Amigo</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="column show-for-large-up large-4" id="menu">
			<ul>
				<li><a href="javascript:void(0);" data-reveal-id="mdlUpload" @click="openModal('upload')"><i class="fa fa-cloud-upload"></i></a></li>
			</ul>
		</div>
		<div class="column show-for-large-up large-2" id="account">
			<a href="#">{{ explode(' ',$user->use_name)[0] }} </a><span data-dropdown="dropUser"> &nbsp;&nbsp;<i class="fa fa-caret-down"></i></span>
			<ul id="dropUser" class="f-dropdown" data-dropdown-content>
				<li><a href="#">Minha conta</a></li>
				<li><a href="#">Configurações</a></li>
				<li><a href="#">Sair</a></li>
			</ul>
		</div>
		<div class="hide-for-large-up mobile-menu-icon hide">
			<i class="fa fa-navicon"></i>
		</div>
	</nav>
	<div class="mobile-menu">
		<div class="wrap small-11 img-center medium-10 no-p">
			<div class="small-10 medium-10 columns no-p">
				<input type="text" style="margin-left: 10%;" placeholder="encontre livros, autores e amigos">
			</div>
			<div class="small-1 medium-1 columns no-p end">
				<a href="#" class="button postfix">
					<i class="fa fa-search"></i>
				</a>
			</div>
		</div>
		<div class="small-10 img-center medium-10 no-p">
			<ul>
				<li><a href="/">livros</a></li>
				<li><a href="/">estantes</a></li>
				<li><a href="/">leituras</a></li>
				<li><a href="/">amigos</a></li>
			</ul>
		</div>
	</div>
	<div id="content">
		@yield('content')
	</div>
	<div id="inside-read"></div>
	<div class="footer-fix"></div>
	<div id="view">
		<div class="column small-3 medium-3 large-3 active">
			<a href="#"><i class="fa fa-book"></i>&nbsp;&nbsp;&nbsp; 
				<div class="sflup">leituras</div>
			</a>
		</div>
		<div class="column small-3 medium-3 large-3">
			<a href="#"><i class="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp; 
				<div class="sflup">mensagens</div>
			</a>
		</div>
		<div class="column small-3 medium-3 large-3">
			<a href="#"><i class="fa fa-users"></i>&nbsp;&nbsp;&nbsp; 
				<div class="sflup">amigos</div>
			</a>
		</div>
		<div class="column small-3 medium-3 large-3">
			<a href="#"><i class="fa fa-globe"></i>&nbsp;&nbsp;&nbsp; 
				<div class="sflup">notificações</div>
			</a>
		</div>
	</div>
	@include('_partials.modals')
	<footer></footer>
	@include ('_partials.templates');
	<script type="text/javascript">
		var bookData = {!! $user->Books !!};
	</script>
	<script type="text/javascript" src="/src/js/plugins.js"></script>
	<script type="text/javascript" src="/src/js/master.js"></script>
	@yield('script')
</body>
</html>
@else
@yield('content')
@endif
