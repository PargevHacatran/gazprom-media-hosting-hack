<?php

    include_once '../../essences/Video.php';
    
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    if ($_FILES['file']) {
        $methodeName = $_POST['methodeName'];

        $file = $_FILES['file'];

        $video = new Video ([
            'file_anme' => '', 
            'tmp_name' => '', 
            'type' => '', 
            'size' => ''
        ]);

        // обработка методов

        switch ($methodeName) {
            case 'get_segments': $video->get_segments();
            case 'get_tags': $video->get_tags();
            case 'get_text': $vide->get_text();
            case 'get_timecodes': $vide->get_timecodes();
        }
    }
?>