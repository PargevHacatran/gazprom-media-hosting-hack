<?php 
    
    #[\AllowDynamicProperties]
    class Video {
        protected $segments = ['hello'];
        protected $tags = ['#нож'];
        protected $text = [];
        protected $timecodes = [];
        
        public function __construct ($params) {
            foreach ($params as $key => $value){
                $this->{$key} = $value;
            }
        }

        public function get_segments () {
            echo json_encode($this->segments);
        }

        public function get_tags () {
            echo json_encode($this->tags);
        }

        public function get_text () {
            echo json_encode($this->text);
        }

        public function get_timecodes () {
            echo json_encode($this->text);
        }

    }
    

?>