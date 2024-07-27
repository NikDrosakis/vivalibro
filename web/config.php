<?php 
//@ini_set('xdebug.max_nesting_level', 10000);
@ini_set('output_buffering', 'on');
@ini_set('max_execution_time', 0);
@ini_set('session.cookie_httponly',1);
error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);
ini_set("log_errors", 1);

$time=time();
@ini_set('gd.jpeg_ignore_warning', true);
@ini_set('session.use_trans_sid', 0);
@ini_set('session.use_only_cookies', 1);
@ini_set('zlib.output_compression', '1');


//GaiaCMS configuration
$time=time();
//setcookie("PHPSESSID","",$time-3600,"/"); // delete cookie
//if(!ob_start("ob_gzhandler")) ob_start();
@define('SITE_ROOT',$_SERVER['DOCUMENT_ROOT'].'/');
@define('SERVERNAME',$_SERVER['SERVER_NAME']);
@define('SERVEROOT',dirname(SITE_ROOT).'/');
@define('HTTP_HOST',$_SERVER['HTTP_HOST']);
@define('REFERER',$_SERVER['HTTPS']=='on' ? 'https://' : 'http://'); //http or https
@define('AIMD5_API','/var/www/api/');
@define('GAIAROOT',__DIR__.'/');
@define('GAIABASE',str_replace(basename(__DIR__), '', __DIR__));
@define('G',GAIAROOT);
@define('SITE_URL',REFERER.HTTP_HOST.'/'); //the full url
@define('SITE',$_SERVER['HTTP_HOST']);
@define('SERVERNAME', $_SERVER['SERVER_NAME']);
@define('SUBDOM_EXIST', substr_count($_SERVER['HTTP_HOST'], '.')==2 ? 1 : 0);
@define('DOM_EXT', pathinfo($_SERVER['SERVER_NAME'], PATHINFO_EXTENSION));
@define('DOM_ARRAY', explode('.',$_SERVER['HTTP_HOST']));
@define('DOMAINAME',SUBDOM_EXIST ? DOM_ARRAY[1] : DOM_ARRAY[0]);
@define('SITE',DOMAINAME);
@define('EXT',DOM_EXT);
@define('SERVERBASE',DOMAINAME.'.'.DOM_EXT);
@define('SUBDOM',SUBDOM_EXIST ? DOM_ARRAY[0]: '');
@define('LOC','en');
@define('LANG','en');
@define('AJAXREQUEST',$_SERVER['HTTP_X_REQUESTED_WITH']=="XMLHttpRequest");
@define('ROOTSETUP',$_SERVER['REQUEST_URI']=='/gaia/' || $_SERVER['REQUEST_URI']=='/gaia/index.php' ? true :false);
//START THE SESSION
//if(!isset($_SESSION))session_start();
include_once "generic.php";
spl_autoload_register(function ($className) {
    if(file_exists("class/".$className.".php"))
    include ("class/".$className.".php");
});

$bot=new DB('vivalibro');

$G= array(
//*********************URI PATHS************************
    'LIB'=> "https://".SERVERNAME."/gaia/lib/", //lib
    'IMG'=> SITE_URL."img/", //GAIA images
    'SITE_ROOT'=>SITE_ROOT,
    'SITE_URL'=>SITE_URL,
    'GAIAROOT'=>GAIAROOT,
    'ROOTSETUP'=>ROOTSETUP,
    'GAIABASE'=>GAIABASE,
    'REFERER'=>REFERER,
    'server'=>$_SERVER,
    'HTTP_HOST'=>HTTP_HOST,
    'SERVEROOT'=>SERVEROOT,
//'URIMAP'=> $urimap,
//'URIS'=> $uris,

//*********************API*********************************
    'API_ROOT' => '/var/www/api/',
    'API_TEMPLATESURI' => '/var/www/templates/',
    'API_TEMPLATESREPOPATH' => 'https://vivalibro.gr/repo/templates/',
    'API_TEMPLATESPATH' => 'https://vivalibro.gr/store/templates/',

//*********************BASIC HIERARCHY domain > globs > template > page > uris(2nd level) > widget*************
    'DOMAIN'=> $DOMAIN,
//'DOMAINS'=> $DOMAINS,
    'SUBDOM_EXIST'=>SUBDOM_EXIST,
    'DOM_ARRAY'=>DOM_ARRAY,
    'SUBDOM'=>SUBDOM,
//**lang**
    'lang'=>isset($_GET['lang']) ? $_GET['lang'] : (!empty($_COOKIE['lang']) ? $_COOKIE['lang']: 'en'),
    'langprefix'=>isset($_GET['lang']) && $_GET['lang']!='en' ? $_GET['lang'] : (!empty($_COOKIE['lang']) ? $_COOKIE['lang']: ''),
    'is'=> $bot->fl(array("name",LOC),"globs"),
    'globs_tags'=>array_values(array_unique($bot->fl('tag','globs'))),
    'APPSROOT'=> SITE_ROOT."apps/",
    'APPSPATH'=> SITE_URL."apps/",
    'apps'=>$apps,
    'TEMPLATESURI'=> SITE_ROOT."templates/",
    'TEMPLATESPATH'=> SITE_URL."templates/",
    'template'=>$TEMPLATE,
    'templates'=>read_folder(TEMPLATESURI),
    'template_rootpath'=>TEMPLATESURI.$TEMPLATE."/",
    'PAGESURI'=> $PAGESURI,
    'PAGESPATH'=> $PAGESPATH,
    'pages'=>$pages,
    'page' => isset($_GET['page']) ?  $_GET['page'] : 'book',
    'globs_types'=>array(0=>'text',1=>'img',2=>'html',3=>'boolean',4=>'integer',5=>'decimal2',6=>'textarea',7=>'url',8=>'color',9=>'read'),
//preserver uris array 2nd level SITE_URL/[uri]
    'global_uri'=>$GLOBAL_URI,
    'static_pages'=>!empty($pages) ? array_values(array_diff($pages,$GLOBAL_URI)):array(),
    'post_uri'=>$POST_URI,
    'tax_uri'=>$TAX_URI,
    'user_uri'=>$USER_URI,
//'page_uri'=>$PAGE_URI,
    'app_uri'=>$APP_URI,
    'WIDGETLOCALPATH'=> SITE_URL."templates/".$TEMPLATE."/widgets/",
    'WIDGETPATH'=> "/gaia/widgets/",
    'WIDGETLOCALURI'=> SITE_ROOT."templates/".$TEMPLATE."/widgets/",
    'WIDGETURI'=> GAIAROOT."widgets/",
    'localwidgets'=>glob(TEMPLATESURI.$TEMPLATE.'/widgets/*.php'),
    'widgets'=>glob(GAIAROOT.'widgets/*.php'),
    'localwidgets_json'=>glob(TEMPLATESURI.$TEMPLATE.'/widgets/*.json'),
    'widgets_json'=>glob(GAIAROOT.'widgets/*.json'),
//*************** SETUP*********************
    'CONF'=> $CONF,
    'REDISDB'=> $CONF[$DOMAIN]['redisdb'],
//*************** MISC*********************
    'mobile'=> $ismobile,
    'LOC'=> LOC,
//*********************MEDIA**********************
    'UPLOADS'=> SITE_URL."media/",
    'UPLOADS_ICON'=> SITE_URL."media/thumbs",
    'UPLOADS_ROOTPATH'=> SITE_ROOT."media/",
    'UPLOADS_ROOTPATH_ICON'=> SITE_ROOT."media/thumbs/",
//*********************BACKUPS -STORE *********************
    'BACKUPURI'=> SERVEROOT.'repo/',
//*********************CRONS*********************
    'CRON'=> SITE_ROOT."cron/",
//*********************maria DATA user,post,tax,menus (and grps)*********************
    'postgrps'=> $bot->fl(array("id","name"),"postgrp","WHERE status=1"),
    'usergrps'=> $bot->fl(array("id","name"),"usergrp"),
    'taxgrps'=> $bot->fl(array("name","parenting"),"taxgrp","WHERE status=1"),
    'taxgrp'=> $bot->fl(array("id","name"),"taxgrp","WHERE status=1"),
    'posts'=>$bot->fl(array("id","title"),"post"),
    'users'=>$bot->fl(array("id","name"),"user"),
    'menus'=>$bot->fl(array("id","title"),"menu"),
    'supusers'=>$bot->fl(array("id","name"),"user","WHERE grp > 1"),

//************DYNAMIC FORMS**********************************
    'taxname'=>$bot->fl(array("id","name"),"tax"),
    'menutitle'=>$bot->fl(array("id","title"),"menu"),

//*********************errors*******************************
    'error'=>array(
        1 => 'already exists',
        2 => 'query did not executed'
    ),
//seo
    'xmls'=> array('sitemap','atom','rss'),
//**********************GLOBAL FORMS
    'authentication'=>array('1'=>'Account Active','2'=>'Account Suspended. Proceed to Payment Page.','3'=>'Account Registration Invoice Pending. Proceed to Payment Page.','4'=> 'Account Proactivated. Proceed to Registration Confirmation Page.','5'=> 'Account is banned.Contact with Administrator.'),
    'authen'=>array('1'=>'Active','2'=>'Suspended','3'=>'Not Activated','4'=> 'Proactivated','5'=> 'Banned'),

    'orient'=>array(1=>'horizontal',2=>'vertical'),
    'status'=>array(0=>'closed',1=>'inactive',2=>'active'),
    'langs'=>array(1=>'en',2=>'gr'),
    'privacy'=>array(0=>'hidden',1=>'visible'),
    'colorstatus'=>array(0=>'red',1=>'orange',2=>'green'),
    'phase'=>array(0=>'logged out',1=>'sleepy',2=>'logged in'),
    'icons'=>array(
        "admin"=>"alert",
        "apps"=>"leaf",
        "backup"=>"duplicate",
        "categories"=>"list-alt",
        "console"=>"scale",
        "documentation"=>"question-sign",
        "fileerrors"=>"alert",
        "global"=>"record",
        "home"=>"dashboard",
        "local"=>"globe",
        "logout"=>"hand-right",
        "manage"=>"edit",
        "media"=>"film",
        "gallery"=>"film",
        "modules"=>"th",
        "menu"=>"list",
        "new"=>"new-window",
        "notifications"=>"hand-right",
        "page"=>"th-large",
        "pagevar"=>"equalizer",
        "permissions"=>"filter",
        "post"=>"file",
        "redis"=>"road",
        "seo"=>"bullhorn",
        "simulate"=>"record",
        "sync"=>"tree-conifer",
        "setup"=>"cog",
        "stats"=>"stats",
        "superboard"=>"list-alt",
        "tags"=>"tags",
        "taxonomy"=>"tags",
        "templates"=>"th-large",
        "widget"=>"th-large",
        "groups"=>"briefcase",
        "user"=>"user"
    ),
    //mongo database setup
    //setup 1:templates 2:modules 3: dsh_pages
    //$pages=$DASHPAGES[$G['my']['status']];
    'apages'=>array(
        //    "local",
        "setup",
        "templates",
        "global",
        "media",
        "user",
        "seo",
        "taxonomy",
        "post",
        //  "apps",
        "widget",
        "menu",
        //    "doc",
//	"comments",
//	"ads"=>array('customers','bar','history','pricing','settings'),

        // "admin"
    ),

    'ampages'=>array(
        "setup",
        "media",
        "user",
        "post",
        "taxonomy",
        "templates",
        "widget",
        "seo"
    ),

    'sucolors'=>array(
        '1'=>'rgba(265,118,267,0.3)',
        '2'=>'rgba(85,155,195,0.5)',
        '3'=>'rgba(165,175,95,0.3)',
        '4'=>'rgba(85,45,95,0.3)',
        '5'=>'rgba(85,45,95,0.3)',
        '6'=>'rgba(85,45,95,0.3)',
        '7'=>'rgba(85,45,95,0.3)',
        '8'=>'rgba(85,45,95,0.3)'
    ),
    'post_status'=>array(
        0=>'Closed',
        1=>'Inactive',
        2=>'Active'
    ),
    'bool'=>array('y' => 'YES','n'=>'NO'),
    'greekMonths' => array('Ιανουαρίου','Φεβρουαρίου','Μαρτίου','Απριλίου','Μαΐου','Ιουνίου','Ιουλίου','Αυγούστου','Σεπτεμβρίου','Οκτωβρίου','Νοεμβρίου','Δεκεμβρίου')
);
foreach($_GET as $get =>$getval){
    $G[$get] =trim($getval);
}
$G['page']= isset($_GET['page']) ? trim($_GET['page']):'book';
$G['mode']= isset($_GET['mode']) ? trim($_GET['mode']):'';
$G['sub']= isset($_GET['sub']) ? trim($_GET['sub']):'';
$G['id']= isset($_GET['id']) ? trim($_GET['id']):'';
$G['uid']= isset($_GET['uid']) ? trim($_GET['uid']):'';
$G['server']=$_SERVER;
function icon($title){
    global $G;
    if (array_key_exists($title,$G['icons'])) {
        return $G['icons'][$title];
    }else{
        return "asterisk";
    }
}
$G['SITE_ROOT']=SITE_ROOT;
$G['SITE_URL']=SITE_URL;
$G['SERVEROOT']=SERVEROOT;
$G['HTTP_HOST']=HTTP_HOST;
@define('UPLOADS_ROOTPATH', GAIABASE.SERVERBASE.'/media/');
@define('UPLOADS', SITE_URL.'media/');
@define('UPLOADS_ROOTPATH_ICON', GAIABASE.SERVERBASE."/media/thumbs/");
@define('SERVERALIAS',explode(HTTP_HOST)[0]);
@define('URL_FILE',basename($_SERVER['PHP_SELF']) );
@define('IMG',SITE_URL."media/");
@define ('TEMPLATESURI',SITE_ROOT."templates/");
@define('SUBDOM_EXIST', substr_count($_SERVER['HTTP_HOST'], '.')==2 ? 1 : 0);
@define('DOM_ARRAY', explode('.',$_SERVER['HTTP_HOST']));
@define('SUBDOM',SUBDOM_EXIST ? DOM_ARRAY[0]: '');
 $loggedin= $G['loggedin']= isset($_COOKIE['GSID']) &&  $_COOKIE['GSGRP'] > 1 ? true : false;
if($loggedin){
	$my=$bot->f("SELECT * from user where id=?",[$_COOKIE['GSID']]);
}
//start root class
//$cms=new Gaia();
/*
 * books
 *
 * */
$G['classif']=jsonget("dewey.json");
$G['book_status']=array(
"0" => "lost",
"1" =>"not owned",
"2" =>"desired to buy",
"3" => "owned on shelve"
);
$G['isread']=array(
0=> "no",
1 => "reading",
2 => "read"
);
$G['bookdefaultimg']= "/img/empty.png";
$G['editordefaultimg']= "/img/empty_editor.png";
$G['writerdefaultimg']= "/img/empty_user.png";
    $cms=new Gaia("vivalibro");
